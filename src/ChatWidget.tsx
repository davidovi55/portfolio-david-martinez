import { FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import MarkdownMessage from './markdown'
import { API_BASE, trackEvent } from './telemetry'

type Language = 'es' | 'en'
type Mode = 'recruiter' | 'offer' | 'technical' | 'biomedical' | 'projects' | 'interview'
type Role = 'general' | 'ai engineer' | 'backend' | 'data scientist' | 'biomedical' | 'mlops'
type ChatMessage = { role: 'user' | 'assistant'; content: string }

const copy = {
  es: {
    eyebrow: 'ASISTENTE PROFESIONAL',
    title: 'Conversa con mi perfil',
    intro: 'Pregunta por mi experiencia, proyectos, habilidades o compara mi perfil con una oferta concreta.',
    placeholder: 'Escribe una pregunta sobre David…',
    send: 'Enviar',
    newChat: 'Nueva conversación',
    mode: 'Modo',
    role: 'Rol objetivo',
    available: 'Asistente disponible',
    unavailable: 'Asistente no disponible',
    loading: 'Preparando una respuesta…',
    error: 'No se ha podido generar la respuesta. Inténtalo de nuevo.',
    privacy: 'Analítica anónima: solo medimos uso agregado del asistente. No guardamos preguntas ni respuestas.',
    recruiter: 'Reclutador · 60 segundos',
    offer: 'Comparar una oferta',
    technical: 'Responsable técnico',
    biomedical: 'Ingeniería biomédica',
    projects: 'Casos de proyecto',
    interview: 'Preparar entrevista',
    general: 'General',
    aiEngineer: 'AI / Conversational AI',
    backend: 'Backend / Integraciones',
    dataScientist: 'Data Scientist / ML',
    biomedicalRole: 'Biomedical / Digital Health',
    mlops: 'MLOps / Plataforma',
    suggestions: [
      '¿Por qué debería entrevistar a David para IA?',
      'Explica su experiencia end-to-end.',
      '¿Qué puede aportar desde el primer día?',
    ],
  },
  en: {
    eyebrow: 'PROFESSIONAL ASSISTANT',
    title: 'Talk to my profile',
    intro: 'Ask about my experience, projects, skills or compare my profile with a specific job offer.',
    placeholder: 'Ask a question about David…',
    send: 'Send',
    newChat: 'New conversation',
    mode: 'Mode',
    role: 'Target role',
    available: 'Assistant available',
    unavailable: 'Assistant unavailable',
    loading: 'Preparing an answer…',
    error: 'The answer could not be generated. Please try again.',
    privacy: 'Anonymous analytics: we only measure aggregate assistant usage. Questions and answers are not stored.',
    recruiter: 'Recruiter · 60 seconds',
    offer: 'Compare a job offer',
    technical: 'Technical lead',
    biomedical: 'Biomedical engineering',
    projects: 'Project cases',
    interview: 'Interview preparation',
    general: 'General',
    aiEngineer: 'AI / Conversational AI',
    backend: 'Backend / Integrations',
    dataScientist: 'Data Scientist / ML',
    biomedicalRole: 'Biomedical / Digital Health',
    mlops: 'MLOps / Platform',
    suggestions: [
      'Why should a team interview David for AI?',
      'Explain his end-to-end experience.',
      'What could he contribute from day one?',
    ],
  },
} as const

const modes: Mode[] = ['recruiter', 'offer', 'technical', 'biomedical', 'projects', 'interview']
const roles: Role[] = ['general', 'ai engineer', 'backend', 'data scientist', 'biomedical', 'mlops']

function visitorId() {
  const key = 'portfolio-david-agent-visitor'
  try {
    let id = window.localStorage.getItem(key)
    if (!id) {
      id = window.crypto.randomUUID()
      window.localStorage.setItem(key, id)
    }
    return id
  } catch {
    return 'portfolio-visitor'
  }
}

export default function ChatWidget({ language }: { language: Language }) {
  const t = copy[language]
  const [mode, setMode] = useState<Mode>('recruiter')
  const [role, setRole] = useState<Role>('general')
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [busy, setBusy] = useState(false)
  const [ready, setReady] = useState<boolean | null>(null)
  const [error, setError] = useState('')
  const messagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    trackEvent({ event: 'assistant_opened', language })
    let active = true
    fetch(`${API_BASE}/api/status`)
      .then((response) => response.json())
      .then((data: { ready?: boolean }) => { if (active) setReady(Boolean(data.ready)) })
      .catch(() => { if (active) setReady(false) })
    return () => { active = false }
  }, [])

  useEffect(() => {
    messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, busy])

  const welcome = useMemo<ChatMessage>(() => ({
    role: 'assistant',
    content: language === 'es'
      ? 'Hola. Soy el asistente profesional de David. Puedo explicar su experiencia, sus proyectos y su encaje con una posición concreta.'
      : 'Hello. I am David’s professional assistant. I can explain his experience, projects and fit for a specific role.',
  }), [language])

  const visibleMessages = messages.length > 0 ? messages : [welcome]

  function reset() {
    setMessages([])
    setQuestion('')
    setError('')
    trackEvent({ event: 'conversation_reset', language })
  }

  async function send(value: string) {
    const message = value.trim()
    if (!message || busy || ready === false) return
    setBusy(true)
    setError('')
    setQuestion('')
    const nextMessages = [...messages, { role: 'user' as const, content: message }]
    setMessages(nextMessages)
    try {
      const response = await fetch(`${API_BASE}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Client-Id': visitorId() },
        body: JSON.stringify({
          message,
          mode,
          role,
          language,
          history: messages.slice(-12),
        }),
      })
      const data = await response.json() as { answer?: string; error?: string }
      if (!response.ok || !data.answer) throw new Error(data.error || t.error)
      setMessages([...nextMessages, { role: 'assistant', content: data.answer }])
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : t.error)
    } finally {
      setBusy(false)
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    void send(question)
  }

  return (
    <section className="chat-widget" aria-labelledby="chat-title">
      <div className="chat-widget-heading">
        <div>
          <p className="label">{t.eyebrow}</p>
          <h2 id="chat-title">{t.title}</h2>
          <p>{t.intro}</p>
        </div>
        <button className="chat-reset" type="button" onClick={reset} disabled={busy}>{t.newChat}</button>
      </div>

      <div className="chat-controls">
        <label>{t.mode}
          <select value={mode} onChange={(event) => {
            const nextMode = event.target.value as Mode
            setMode(nextMode)
            trackEvent({ event: 'mode_selected', mode: nextMode, role, language })
          }}>
            {modes.map((item) => <option value={item} key={item}>{t[item]}</option>)}
          </select>
        </label>
        <label>{t.role}
          <select value={role} onChange={(event) => {
            const nextRole = event.target.value as Role
            setRole(nextRole)
            trackEvent({ event: 'role_selected', mode, role: nextRole, language })
          }}>
            <option value="general">{t.general}</option>
            <option value="ai engineer">{t.aiEngineer}</option>
            <option value="backend">{t.backend}</option>
            <option value="data scientist">{t.dataScientist}</option>
            <option value="biomedical">{t.biomedicalRole}</option>
            <option value="mlops">{t.mlops}</option>
          </select>
        </label>
        <span className={ready ? 'chat-status status-ready' : 'chat-status'}>
          <i aria-hidden="true" /> {ready === null ? '…' : ready ? t.available : t.unavailable}
        </span>
      </div>

      <div className="chat-messages" ref={messagesRef} aria-live="polite">
        {visibleMessages.map((item, index) => (
          <div className={`chat-message chat-message-${item.role}`} key={`${item.role}-${index}`}>
            <span className="chat-message-label">{item.role === 'user' ? 'TÚ' : 'DAVID · AI ASSISTANT'}</span>
            <MarkdownMessage content={item.content} />
          </div>
        ))}
        {busy && <div className="chat-message chat-message-assistant chat-loading"><span className="chat-message-label">DAVID · AI ASSISTANT</span><div>{t.loading}</div></div>}
      </div>

      {error && <p className="chat-error" role="alert">{error}</p>}
      <div className="chat-suggestions">
        {t.suggestions.map((suggestion) => <button type="button" key={suggestion} onClick={() => void send(suggestion)} disabled={busy || ready === false}>{suggestion} ↗</button>)}
      </div>
      <form className="chat-composer" onSubmit={submit}>
        <textarea value={question} onChange={(event) => setQuestion(event.target.value)} placeholder={t.placeholder} rows={2} maxLength={2000} disabled={busy || ready === false} />
        <button type="submit" disabled={busy || ready !== true || !question.trim()}>{t.send} <span aria-hidden="true">↗</span></button>
      </form>
      <p className="chat-privacy">{t.privacy}</p>
    </section>
  )
}
