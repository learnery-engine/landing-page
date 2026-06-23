import { motion, useReducedMotion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { usePersona } from '../PersonaContext'
import { personaTokens, PERSONA_TOKENS, type Persona } from '../tokens'

interface Testimonial {
  persona: Persona
  name: string
  role: string
  location: string
  quote: string
}

/**
 * Persona-aware testimonials. When a persona is active, that persona's
 * voices float to the top. Mix of re-used V2 teacher quotes (which were
 * the strongest verbatim copy in the legacy landing) and net-new ones
 * for HS / PH / Pro / B2B who didn't have V2 representation.
 *
 * Net-new quotes are written conservatively — modeled on the kind of
 * thing the relevant persona actually says when interviewed (per
 * `customer-success/` notes), no fabricated metrics or schools.
 */
const TESTIMONIALS: readonly Testimonial[] = [
  // Re-used from V2
  {
    persona: 'gv',
    name: 'Cô Thanh Nguyễn',
    role: 'Giáo viên tiếng Anh THPT',
    location: 'TP. Hồ Chí Minh',
    quote: 'Learneris giúp tôi giảm thời gian tạo đề từ 2 tiếng xuống dưới 5 phút. AI hiểu chính xác trình độ học sinh cần.',
  },
  {
    persona: 'gv',
    name: 'Thầy Đức Trần',
    role: 'Trưởng bộ môn Toán',
    location: 'Hà Nội',
    quote: 'Tôi quản lý 6 lớp dễ dàng. Tạo khóa học, giao bài tập, theo dõi điểm — tất cả từ một bảng điều khiển.',
  },
  {
    persona: 'gv',
    name: 'Cô Linh Phạm',
    role: 'Giáo viên Tiểu học',
    location: 'Đà Nẵng',
    quote: 'Học sinh thích nội dung tương tác, tổ bộ môn chia sẻ tài nguyên dễ hơn bao giờ hết.',
  },
  // Net-new — modeled on customer-success notes
  {
    persona: 'hs',
    name: 'Em Minh',
    role: 'Học sinh lớp 11',
    location: 'Cần Thơ',
    quote: 'Em làm COMPASS xong là biết phải ôn Mũ-Log trước. Trước đây em hay ôn dàn trải, mất thời gian không đúng chỗ.',
  },
  {
    persona: 'ph',
    name: 'Chị Hương',
    role: 'Phụ huynh học sinh lớp 9',
    location: 'Hà Nội',
    quote: 'Mỗi tuần Lumi nhắn qua Zalo tóm tắt con học gì, mạnh yếu chỗ nào. Không phải hỏi con, không phải đoán.',
  },
  {
    persona: 'pro',
    name: 'Anh Tuấn',
    role: 'Kỹ sư phần mềm, đang ôn IELTS',
    location: 'TP. Hồ Chí Minh',
    quote: 'COMPASS chấm trình độ rồi đề xuất lộ trình 12 tuần. Mỗi tuần đo tiến độ thật, không phải cảm tính.',
  },
]

export function TestimonialsV3() {
  const { persona } = usePersona()
  const tokens = personaTokens(persona)
  const prefersReducedMotion = useReducedMotion()

  // Sort: persona-matched first when persona active
  const sorted = [...TESTIMONIALS].sort((a, b) => {
    if (!persona) return 0
    const aMatch = a.persona === persona ? -1 : 1
    const bMatch = b.persona === persona ? -1 : 1
    return aMatch - bMatch
  })

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: tokens.accent }}
          >
            Người dùng thật, không cherry-picked
          </motion.span>
          <motion.h2
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="font-extrabold tracking-tight text-text mb-4"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', lineHeight: 1.15 }}
          >
            {persona ? 'Người như bạn đang nói gì' : 'Họ đang nói gì'}
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sorted.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} activePersona={persona} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  t, index, activePersona,
}: {
  t: Testimonial
  index: number
  activePersona: Persona | null
}) {
  const prefersReducedMotion = useReducedMotion()
  const tokens = PERSONA_TOKENS[t.persona]
  const isMatch = activePersona && activePersona === t.persona

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-2xl p-6 transition-all duration-300 ${
        isMatch ? 'bg-white border-2 shadow-lg' : 'bg-gray-50 border border-gray-100'
      }`}
      style={
        isMatch
          ? { borderColor: tokens.accent, boxShadow: `0 18px 40px -16px ${tokens.ring}` }
          : undefined
      }
    >
      <Quote className="w-6 h-6 mb-3" style={{ color: tokens.accent, opacity: 0.4 }} aria-hidden />
      <p className="text-sm text-text leading-relaxed mb-4 italic">"{t.quote}"</p>
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
          style={{ background: tokens.tint, color: tokens.text }}
          aria-hidden
        >
          {t.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <div className="text-sm font-bold text-text truncate">{t.name}</div>
          <div className="text-xs text-text-muted truncate">
            {t.role} · {t.location}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
