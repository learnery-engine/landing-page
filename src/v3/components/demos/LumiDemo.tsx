import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Send } from 'lucide-react'

interface LumiMsg {
  id: number
  role: 'lumi' | 'user'
  text: string
}

const LUMI_GREETINGS = [
  'Chào em! Lumi đây 👋 Hôm nay em muốn học gì?',
  'Hi! Em đang cần Lumi hỗ trợ về việc gì?',
]

/**
 * Lumi chat demo — keyword-matched canned replies. NOT a real LLM call;
 * unauth marketing page can't expose AI without rate-limit / abuse risk.
 * The point is conveying the EXPERIENCE: proactive tone, persona-aware
 * suggestions, fluid typing indicator.
 *
 * When a real preview API lands (rate-limited, captcha-gated), swap
 * `getCannedReply` for a streaming fetch.
 */
function getCannedReply(input: string): string {
  const t = input.toLowerCase()
  if (/(toán|math|hàm số|tích phân|mũ|log)/.test(t)) {
    return 'Em đang gặp khó ở phần nào? Hàm số · Mũ-Log · Tích phân? Lumi gửi em Step #1 ôn nhanh nha 💪'
  }
  if (/(văn|essay|viết|nghị luận)/.test(t)) {
    return 'Lumi có thể giúp em cấu trúc bài nghị luận theo MELODY: Mở bài → Lý lẽ → Bằng chứng → Đối chiếu → Kết. Em viết về đề nào?'
  }
  if (/(anh|english|toeic|ielts)/.test(t)) {
    return 'Em đang ở band/score nào hiện tại? Lumi có thể gợi ý lộ trình COMPASS dựa trên target em mong muốn.'
  }
  if (/(lớp|class|trường)/.test(t)) {
    return 'Bài tập lớp em đang học cô giao là gì? Em chụp đề gửi Lumi xem, mình cùng giải nha.'
  }
  if (/(xin|chào|hi|hello)/.test(t)) {
    return 'Chào em! Em muốn ôn môn nào hôm nay? Toán · Văn · Anh · hay môn khác?'
  }
  return 'Lumi đây 👀 Em mô tả rõ hơn một chút nhé — em đang học môn gì, lớp mấy, gặp khó chỗ nào?'
}

const SUGGESTED_PROMPTS = [
  'Em đang học toán lớp 11',
  'Giúp em viết essay tiếng Anh',
  'Lộ trình ôn TOEIC 600+',
  'Bài tập về hàm số',
]

export function LumiDemo() {
  const [messages, setMessages] = useState<LumiMsg[]>([])
  const [draft, setDraft] = useState('')
  const [typing, setTyping] = useState(false)
  const counterRef = useRef(0)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const greeting = LUMI_GREETINGS[Math.floor(Math.random() * LUMI_GREETINGS.length)]
    setMessages([{ id: ++counterRef.current, role: 'lumi', text: greeting }])
  }, [])

  useEffect(() => {
    if (!scrollRef.current) return
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages, typing])

  function send() {
    const text = draft.trim()
    if (!text || typing) return
    setMessages((m) => [...m, { id: ++counterRef.current, role: 'user', text }])
    setDraft('')
    setTyping(true)
    const ms = prefersReducedMotion ? 400 : 1200
    setTimeout(() => {
      setMessages((m) => [...m, { id: ++counterRef.current, role: 'lumi', text: getCannedReply(text) }])
      setTyping(false)
    }, ms)
  }

  return (
    <div className="grid sm:grid-cols-[1fr_220px]">
      {/* Chat */}
      <div className="p-5 sm:p-7 border-r border-gray-100">
        <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-gray-100">
          <div className="relative">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ background: 'linear-gradient(135deg, #F472B6, #EC4899)' }}
            >
              ✨
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-text">Lumi</div>
            <div className="text-[10px] text-text-muted">Trợ lý AI · canned mode (demo)</div>
          </div>
        </div>

        <div ref={scrollRef} className="space-y-2.5 max-h-[280px] overflow-y-auto pr-1">
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className="max-w-[80%] px-3.5 py-2 rounded-2xl text-sm leading-snug"
                style={{
                  background: m.role === 'user' ? 'linear-gradient(135deg, #F472B6, #EC4899)' : '#F8F4FA',
                  color: m.role === 'user' ? '#fff' : '#0f172a',
                  borderTopLeftRadius: m.role === 'lumi' ? 4 : undefined,
                  borderTopRightRadius: m.role === 'user' ? 4 : undefined,
                }}
              >
                {m.text}
              </div>
            </motion.div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="px-3.5 py-2.5 rounded-2xl bg-[#F8F4FA]" style={{ borderTopLeftRadius: 4 }}>
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-pink-400"
                      animate={prefersReducedMotion ? undefined : { opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-3 flex gap-2">
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            disabled={typing}
            placeholder="Hỏi Lumi điều gì đó…"
            className="flex-1 px-4 py-2.5 rounded-xl border-2 border-gray-200 bg-white text-sm placeholder:text-gray-400 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all disabled:opacity-60"
          />
          <button
            type="button"
            onClick={send}
            disabled={!draft.trim() || typing}
            className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-pink-500 text-white hover:bg-pink-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Gửi tin nhắn"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Side panel */}
      <div className="hidden sm:block p-5 bg-gray-50/50">
        <div className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-3">Thử hỏi</div>
        <div className="space-y-1.5">
          {SUGGESTED_PROMPTS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setDraft(s)}
              disabled={typing}
              className="block w-full text-left px-3 py-2 rounded-lg text-xs text-text-muted hover:text-text hover:bg-white border border-transparent hover:border-gray-200 transition-all disabled:opacity-50"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
