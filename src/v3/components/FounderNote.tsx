import { motion, useReducedMotion } from 'framer-motion'
import { usePersona } from '../PersonaContext'
import { personaTokens } from '../tokens'

/**
 * Short founder note. Vietnamese market puts heavy weight on trust signal +
 * a named human behind the product. This isn't a long bio — it's a
 * quiet "here's who I am, here's why this exists" beat right before the
 * final CTA. No fabricated metrics, no "rags to riches" story arc.
 */
export function FounderNote() {
  const { persona } = usePersona()
  const tokens = personaTokens(persona)
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative py-20 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-7 sm:p-9 rounded-2xl bg-gradient-to-br from-gray-50 via-white to-gray-50 border"
          style={{ borderColor: tokens.ring }}
        >
          {/* Avatar */}
          <div
            className="w-20 h-20 rounded-full shrink-0 flex items-center justify-center text-white font-extrabold text-2xl"
            style={{ background: `linear-gradient(135deg, ${tokens.accent}, ${tokens.text})` }}
            aria-hidden
          >
            K
          </div>

          <div className="flex-1 text-center sm:text-left">
            <div
              className="inline-block text-[10px] font-bold uppercase tracking-widest mb-2"
              style={{ color: tokens.accent }}
            >
              Lời nhắn từ người sáng lập
            </div>
            <p className="text-base text-text leading-relaxed mb-3">
              Mình xây Learneris vì tin rằng AI nên giúp giáo dục Việt Nam{' '}
              <strong>nhanh hơn, công bằng hơn, và sâu hơn</strong> — không chỉ một bộ công cụ
              cho thầy cô soạn bài, mà là một hệ sinh thái nơi học sinh thực sự biết AI và biết
              <em> dùng AI để xây thứ thuộc về mình</em>.
            </p>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              Mỗi feature trên đây đều đến từ cuộc trò chuyện thật với giáo viên, học sinh, hoặc
              phụ huynh ở Hà Nội, Sài Gòn, Cần Thơ. Có ý kiến để mình lắng nghe? Email mình tại{' '}
              <a href="mailto:kelsienguyen@gmail.com" className="font-semibold underline decoration-2 underline-offset-2" style={{ color: tokens.accent }}>
                kelsienguyen@gmail.com
              </a>{' '}
              — mình đọc hết.
            </p>
            <div className="text-sm font-semibold text-text">— Kelsie Nguyễn</div>
            <div className="text-xs text-text-muted">Founder, Learneris</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
