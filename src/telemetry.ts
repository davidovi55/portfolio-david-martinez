const PRODUCTION_API = 'https://agente-profesional-david.agentdavidmartinez.workers.dev'
const configuredApi = import.meta.env.VITE_AGENT_API_URL?.replace(/\/$/, '')
export const API_BASE = configuredApi || (import.meta.env.DEV ? '/agent-api' : PRODUCTION_API)

type TelemetryEvent = {
  event: 'assistant_opened' | 'mode_selected' | 'role_selected' | 'question_sent' | 'answer_received' | 'answer_error' | 'conversation_reset'
  mode?: string
  role?: string
  language?: 'es' | 'en'
  outcome?: 'ok' | 'error'
  durationMs?: number
}

/** Sends aggregate metadata only; messages and conversation content are excluded by design. */
export function trackEvent(event: TelemetryEvent) {
  void fetch(`${API_BASE}/api/telemetry`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
    keepalive: true,
  }).catch(() => {
    // Analytics is best-effort and must never affect the visitor experience.
  })
}
