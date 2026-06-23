import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react'
import { navigate } from '../../../lib/navigate'

interface CompassQ {
  topic: string
  prompt: string
  choices: string[]
  correctIndex: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
}

const COMPASS_QUESTIONS: CompassQ[] = [
  {
    topic: 'Hàm số',
    prompt: 'Cho hàm số y = x² − 4x + 3. Tọa độ đỉnh của đồ thị là?',
    choices: ['(2, −1)', '(2, 1)', '(−2, −1)', '(4, 3)'],
    correctIndex: 0,
    difficulty: 'Easy',
  },
  {
    topic: 'Mũ — Logarit',
    prompt: 'Giá trị của log₂(8) + log₃(27) là?',
    choices: ['5', '6', '7', '8'],
    correctIndex: 1,
    difficulty: 'Medium',
  },
  {
    topic: 'Tích phân',
    prompt: '∫₀¹ (3x² + 2) dx = ?',
    choices: ['2', '3', '4', '5'],
    correctIndex: 1,
    difficulty: 'Hard',
  },
]

/**
 * 30-second COMPASS sample. Band lookup math is spec-faithful per
 * `prototype-hub/journey/v1.md § Spec-faithful` — same 7-band table the
 * real COMPASS uses (`program-and-consultation.md §3.2`). 3 questions
 * give too few data points for the real diagnostic; this is sales.
 */
export function CompassDemo() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([null, null, null])

  const done = step >= COMPASS_QUESTIONS.length
  const correctCount = answers.filter((a, i) => a === COMPASS_QUESTIONS[i].correctIndex).length

  // Spec-faithful band lookup (program §3.2)
  const score = (correctCount / COMPASS_QUESTIONS.length) * 10
  const band =
    score < 4 ? 'Yếu' : score < 5 ? 'Trung bình' : score < 6 ? 'Khá' : score < 7 ? 'Giỏi' : 'Xuất sắc'
  const target = score < 4 ? '6.0' : score < 5 ? '7.0' : score < 6 ? '8.0' : score < 7 ? '8.5' : '9.0'
  const track = score < 4 ? 'A' : score < 7 ? 'B' : 'C'

  function pick(i: number) {
    const next = [...answers]
    next[step] = i
    setAnswers(next)
    setTimeout(() => setStep((s) => s + 1), 700)
  }

  function reset() {
    setStep(0)
    setAnswers([null, null, null])
  }

  if (done) return <CompassResult score={score} band={band} target={target} track={track} wrongTopics={COMPASS_QUESTIONS.filter((q, i) => answers[i] !== q.correctIndex).map((q) => q.topic)} correctCount={correctCount} onReset={reset} />

  const q = COMPASS_QUESTIONS[step]
  const myAnswer = answers[step]

  return (
    <div className="p-6 sm:p-8 lg:p-10">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-violet-600">Câu {step + 1} / 3 · {q.topic}</div>
          <div className="text-[10px] font-semibold text-text-muted mt-0.5">Độ khó: {q.difficulty}</div>
        </div>
        <div className="flex gap-1.5">
          {COMPASS_QUESTIONS.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i < step ? 'bg-violet-500' : i === step ? 'bg-violet-300 animate-pulse' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-base sm:text-lg font-semibold text-text mb-5 leading-snug">{q.prompt}</p>
      <div className="grid sm:grid-cols-2 gap-2">
        {q.choices.map((c, i) => {
          const picked = myAnswer === i
          const correct = picked && i === q.correctIndex
          const wrong = picked && i !== q.correctIndex
          const showFeedback = myAnswer !== null
          return (
            <button
              key={i}
              type="button"
              onClick={() => myAnswer === null && pick(i)}
              disabled={myAnswer !== null}
              className={`text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                correct
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-900'
                  : wrong
                    ? 'bg-rose-50 border-rose-400 text-rose-900'
                    : showFeedback && i === q.correctIndex
                      ? 'bg-emerald-50/50 border-emerald-200 text-emerald-800'
                      : showFeedback
                        ? 'bg-gray-50 border-gray-200 text-gray-400'
                        : 'bg-white border-gray-200 text-text hover:border-violet-300 hover:bg-violet-50/40 cursor-pointer'
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-600 text-xs font-bold flex items-center justify-center shrink-0">
                  {String.fromCharCode(65 + i)}
                </span>
                {c}
                {correct && <CheckCircle2 className="w-4 h-4 text-emerald-600 ml-auto" />}
                {wrong && <XCircle className="w-4 h-4 text-rose-600 ml-auto" />}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function CompassResult({
  score, band, target, track, wrongTopics, correctCount, onReset,
}: {
  score: number
  band: string
  target: string
  track: string
  wrongTopics: string[]
  correctCount: number
  onReset: () => void
}) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <div className="p-6 sm:p-8 lg:p-10">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-2">Kết quả COMPASS</div>
        <h3 className="text-2xl font-bold text-text mb-1">
          Em điểm: <span className="tabular-nums">{score.toFixed(1)}</span> / 10
        </h3>
        <p className="text-sm text-text-muted mb-6">
          {correctCount}/3 câu đúng. Đây chỉ là mẫu 3 câu — bài chính thức 50 câu cho ra kết quả chuẩn hơn.
        </p>

        <div className="grid sm:grid-cols-3 gap-3 mb-6">
          <StatTile label="Band" value={band} color="#7C3AED" />
          <StatTile label="Target" value={target} color="#10B981" />
          <StatTile label="Track" value={`Track ${track}`} color="#F59E0B" />
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-5">
          <p className="text-sm text-amber-900 leading-relaxed">
            <strong>Ưu tiên ôn:</strong>{' '}
            {wrongTopics.length > 0
              ? wrongTopics.join(' · ')
              : 'Em đã làm tốt cả 3 chương — cần thêm câu khó để định band chính xác.'}
          </p>
          <p className="text-xs text-amber-800 mt-1.5 opacity-80">
            Công thức: <code className="font-mono text-[11px]">toGain(chương) = max − scored</code>. Mất điểm ở đâu, ôn ở đó.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border-2 border-gray-200 text-sm font-semibold text-text hover:bg-gray-50 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Làm lại
          </button>
          <button
            type="button"
            onClick={() => navigate('/signup')}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700 transition-colors"
          >
            Làm bài COMPASS 50 câu — miễn phí
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  )
}

function StatTile({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-xl p-4 border" style={{ background: `${color}08`, borderColor: `${color}33` }}>
      <div className="text-[10px] uppercase tracking-wider font-semibold opacity-60 mb-1">{label}</div>
      <div className="text-xl font-extrabold tabular-nums" style={{ color }}>{value}</div>
    </div>
  )
}
