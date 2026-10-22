import type { ReactNode } from 'react'

type InlineToken = { type: 'text' | 'strong' | 'em' | 'code' | 'link'; text: string; href?: string }

function normalizeMarkdown(value: string) {
  return String(value || '')
    .replace(/\\(?=[\\*_#\[\]()])/g, '')
    .replace(/\\[ \t]*(?:\n|$)/g, '\n')
    .replace(/&#x20;|&#32;/gi, ' ')
    .replace(/\u00a0/g, ' ')
    .replace(/\r\n?/g, '\n')
}

const INLINE_PATTERN = /(\*\*[^*\n]+\*\*|__[^_\n]+__|`[^`\n]+`|\[[^\]\n]+\]\((?:https?:\/\/|mailto:|tel:)[^\s)]+\)|\*[^*\n]+\*|_[^_\n]+_|https?:\/\/[^\s<]+|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|(?<!\d)(?:\+34[\s-]?)?[6789]\d{8}(?!\d))/gi

function plainParts(text: string): InlineToken[] {
  const result: InlineToken[] = []
  let cursor = 0
  for (const match of text.matchAll(/https?:\/\/[^\s<]+|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|(?<!\d)(?:\+34[\s-]?)?[6789]\d{8}(?!\d)/gi)) {
    if (match.index === undefined) continue
    if (match.index > cursor) result.push({ type: 'text', text: text.slice(cursor, match.index) })
    const value = match[0]
    const href = value.startsWith('http') ? value : value.includes('@') ? `mailto:${value}` : `tel:${value.replace(/[\s-]/g, '')}`
    result.push({ type: 'link', text: value, href })
    cursor = match.index + value.length
  }
  if (cursor < text.length) result.push({ type: 'text', text: text.slice(cursor) })
  return result
}

function inlineTokens(text: string): InlineToken[] {
  const tokens: InlineToken[] = []
  let cursor = 0
  for (const match of text.matchAll(INLINE_PATTERN)) {
    if (match.index === undefined) continue
    if (match.index > cursor) tokens.push(...plainParts(text.slice(cursor, match.index)))
    const value = match[0]
    if (value.startsWith('**') || value.startsWith('__')) tokens.push({ type: 'strong', text: value.slice(2, -2) })
    else if (value.startsWith('`')) tokens.push({ type: 'code', text: value.slice(1, -1) })
    else if (value.startsWith('[')) {
      const link = value.match(/^\[([^\]]+)\]\((.+)\)$/)
      if (link) tokens.push({ type: 'link', text: link[1], href: link[2] })
      else tokens.push({ type: 'text', text: value })
    } else if (value.startsWith('*') || value.startsWith('_')) tokens.push({ type: 'em', text: value.slice(1, -1) })
    else tokens.push({ type: 'link', text: value, href: value.startsWith('http') ? value : value.includes('@') ? `mailto:${value}` : `tel:${value.replace(/[\s-]/g, '')}` })
    cursor = match.index + value.length
  }
  if (cursor < text.length) tokens.push(...plainParts(text.slice(cursor)))
  return tokens
}

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  return inlineTokens(text).map((token, index) => {
    const key = `${keyPrefix}-${index}`
    if (token.type === 'text') return <span key={key}>{token.text}</span>
    if (token.type === 'strong') return <strong key={key}>{token.text}</strong>
    if (token.type === 'em') return <em key={key}>{token.text}</em>
    if (token.type === 'code') return <code key={key}>{token.text}</code>
    return <a key={key} href={token.href} target={token.href?.startsWith('http') ? '_blank' : undefined} rel={token.href?.startsWith('http') ? 'noreferrer' : undefined}>{token.text}</a>
  })
}

type Block =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: number; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'rule' }

function parseBlocks(value: string): Block[] {
  const lines = normalizeMarkdown(value).split('\n')
  const blocks: Block[] = []
  let paragraph: string[] = []
  let list: Extract<Block, { type: 'list' }> | null = null
  const flushParagraph = () => { if (paragraph.length) blocks.push({ type: 'paragraph', text: paragraph.join(' ').trim() }); paragraph = [] }
  const flushList = () => { if (list) blocks.push(list); list = null }

  for (const raw of lines) {
    const line = raw.trim().replace(/\\+$/, '')
    if (!line) { flushParagraph(); flushList(); continue }
    const heading = line.match(/^(#{1,4})\s+(.+)$/)
    const unordered = line.match(/^[-*•]\s+(.+)$/)
    const ordered = line.match(/^\d+[.)]\s+(.+)$/)
    if (heading) { flushParagraph(); flushList(); blocks.push({ type: 'heading', level: heading[1].length, text: heading[2] }); continue }
    if (unordered || ordered) {
      flushParagraph()
      const orderedList = Boolean(ordered)
      if (!list || list.ordered !== orderedList) { flushList(); list = { type: 'list', ordered: orderedList, items: [] } }
      list.items.push((unordered || ordered)![1])
      continue
    }
    if (/^[-*_]{3,}$/.test(line)) { flushParagraph(); flushList(); blocks.push({ type: 'rule' }); continue }
    if (line.startsWith('>')) { flushParagraph(); flushList(); blocks.push({ type: 'quote', text: line.replace(/^>\s?/, '') }); continue }
    flushList(); paragraph.push(line)
  }
  flushParagraph(); flushList()
  return blocks
}

export default function MarkdownMessage({ content }: { content: string }) {
  return <div className="chat-markdown">
    {parseBlocks(content).map((block, index) => {
      if (block.type === 'rule') return <hr key={index} />
      if (block.type === 'heading') {
        const Heading = block.level === 1 ? 'h3' : 'h4'
        return <Heading key={index}>{renderInline(block.text, `heading-${index}`)}</Heading>
      }
      if (block.type === 'list') {
        const List = block.ordered ? 'ol' : 'ul'
        return <List key={index}>{block.items.map((item, itemIndex) => <li key={itemIndex}>{renderInline(item, `list-${index}-${itemIndex}`)}</li>)}</List>
      }
      if (block.type === 'quote') return <blockquote key={index}>{renderInline(block.text, `quote-${index}`)}</blockquote>
      return <p key={index}>{renderInline(block.text, `paragraph-${index}`)}</p>
    })}
  </div>
}
