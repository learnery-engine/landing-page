import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Send, CheckCircle2, RotateCcw } from 'lucide-react'

const TEMPLATES = [
  'Quiz về quang hợp lớp 6',
  'Bài tập cộng phân số lớp 4',
  'Trắc nghiệm lịch sử thế chiến II',
]

/**
 * Mini App generator demo — simulated streaming gen. Doesn't hit a real
 * LLM because:
 *   1. Unauth marketing page = rate-limit / abuse vector
 *   2. The point is the EXPERIENCE (gen feel + output shape), which we
 *      can convey faithfully without burning tokens.
 *
 * When we wire a real Mini App preview API (rate-limited, captcha-gated),
 * swap `MiniAppOutput` for the streaming response renderer.
 */
export function MiniAppDemo() {
  const [topic, setTopic] = useState('')
  const [phase, setPhase] = useState<'idle' | 'generating' | 'done'>('idle')
  const prefersReducedMotion = useReducedMotion()

  function generate() {
    if (!topic.trim() || phase === 'generating') return
    setPhase('generating')
    const ms = prefersReducedMotion ? 600 : 2400
    setTimeout(() => setPhase('done'), ms)
  }

  function reset() {
    setPhase('idle')
    setTopic('')
  }

  return (
    <div className="p-6 sm:p-8 lg:p-10">
      <div className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-1">Mini App · QuizMaker</div>
      <h3 className="text-lg font-bold text-text mb-4">Gõ chủ đề — xem AI ra đề trong vài giây</h3>

      <div className="mb-3">
        <label htmlFor="mini-app-topic" className="block text-xs font-semibold text-text-muted mb-1.5">
          Chủ đề bài kiểm tra
        </label>
        <div className="flex gap-2">
          <input
            id="mini-app-topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && generate()}
            disabled={phase === 'generating'}
            placeholder="vd: quang hợp lớp 6"
            className="flex-1 px-4 py-2.5 rounded-xl border-2 border-gray-200 bg-white text-sm placeholder:text-gray-400 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all disabled:opacity-60"
          />
          <button
            type="button"
            onClick={generate}
            disabled={!topic.trim() || phase === 'generating'}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            {phase === 'generating' ? 'Đang tạo…' : 'Tạo'}
            {phase !== 'generating' && <Send className="w-3.5 h-3.5" />}
          </button>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-2">
          <span className="text-[10px] text-text-muted self-center">Gợi ý:</span>
          {TEMPLATES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTopic(t)}
              disabled={phase === 'generating'}
              className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 hover:bg-violet-100 text-gray-700 hover:text-violet-700 transition-colors"
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Output area */}
      <div className="mt-5 min-h-[200px]">
        {phase === 'idle' && (
          <div className="border-2 border-dashed border-gray-200 rounded-xl py-10 text-center text-sm text-text-muted">
            Output sẽ xuất hiện ở đây
          </div>
        )}
        {phase === 'generating' && <MiniAppSkeleton />}
        {phase === 'done' && <MiniAppOutput topic={topic} onReset={reset} />}
      </div>
    </div>
  )
}

function MiniAppSkeleton() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-semibold text-violet-600">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
        AI đang soạn đề…
      </div>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100 animate-pulse">
          <div className="h-3 w-3/4 bg-gray-200 rounded mb-3" />
          <div className="space-y-2">
            <div className="h-2.5 w-1/2 bg-gray-200 rounded" />
            <div className="h-2.5 w-2/3 bg-gray-200 rounded" />
            <div className="h-2.5 w-1/3 bg-gray-200 rounded" />
            <div className="h-2.5 w-1/2 bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  )
}

function MiniAppOutput({ topic, onReset }: { topic: string; onReset: () => void }) {
  const prefersReducedMotion = useReducedMotion()
  const items = [
    { q: `Câu 1: Khái niệm cơ bản về ${topic} là gì?`, ans: ['A. Đáp án A', 'B. Đáp án B (đúng)', 'C. Đáp án C', 'D. Đáp án D'] },
    { q: `Câu 2: Quá trình ${topic} diễn ra như thế nào?`, ans: ['A. Bước 1 → 2 → 3', 'B. Bước 2 → 1 → 3 (đúng)', 'C. Bước 3 → 1 → 2', 'D. Cả 3 đều đúng'] },
    { q: `Câu 3: Yếu tố nào ảnh hưởng ${topic}?`, ans: ['A. Yếu tố A', 'B. Yếu tố B', 'C. Yếu tố C', 'D. Cả 3 (đúng)'] },
  ]
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs font-semibold text-emerald-600 inline-flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Xong · 3 câu MCQ · 12 giây
        </div>
        <button type="button" onClick={onReset} className="text-[11px] text-text-muted hover:text-text inline-flex items-center gap-1">
          <RotateCcw className="w-3 h-3" />
          Tạo lại
        </button>
      </div>
      <div className="space-y-2">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
          >
            <div className="text-sm font-semibold text-text mb-2">{item.q}</div>
            <div className="grid sm:grid-cols-2 gap-1">
              {item.ans.map((a, j) => (
                <div key={j} className="text-xs text-text-muted px-2 py-1 rounded bg-gray-50">{a}</div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
