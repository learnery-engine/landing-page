import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight, ExternalLink, Quote, Rocket,
  FileQuestion, FileText, BookOpen, LayoutGrid,
  Gamepad2, BarChart3, PenTool, Mic, Image, Presentation,
  Globe, School, GraduationCap, Sparkles, type LucideIcon,
} from 'lucide-react'
import { useV3Translation } from '../i18n'
import { usePersona } from '../PersonaContext'
import { personaTokens } from '../tokens'

const APP_URL = 'https://ai.learneris.com'

/**
 * Comprehensive Mini Apps catalog. Mirrors V2's flagship Platform tool
 * grid (V2 src/components/v2/Platform.tsx lines 38–52 + 421–499) so V3
 * doesn't lose the "here's every tool you get" beat. Same 13 + 1 set so
 * the data is consistent between V2 and V3 — fewer surprises during A/B.
 *
 * The double-width App Builder card at the end mirrors V2's
 * `appBuilder` card (V2 lines 470–498) — the "ship your own AI tool"
 * promise that distinguishes Learneris from a fixed catalog product.
 */

interface ToolMeta {
  key: string
  Icon: LucideIcon
  iconBg: string
  iconColor: string
  /** "New" / "Popular" tag — surfaces V2's same labels. */
  tag?: 'new' | 'popular'
}

const TOOLS: readonly ToolMeta[] = [
  { key: 'interactiveContent', Icon: Gamepad2,    iconBg: 'bg-amber-100',   iconColor: 'text-amber-600',   tag: 'popular' },
  { key: 'premiumQuizMaker',   Icon: FileText,    iconBg: 'bg-violet-100',  iconColor: 'text-violet-600',  tag: 'popular' },
  { key: 'smartDiagram',       Icon: BarChart3,   iconBg: 'bg-blue-100',    iconColor: 'text-blue-600',    tag: 'new' },
  { key: 'quickQuiz',          Icon: FileQuestion, iconBg: 'bg-purple-100', iconColor: 'text-purple-600' },
  { key: 'studyGuide',         Icon: BookOpen,    iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600' },
  { key: 'tosAssessment',      Icon: LayoutGrid,  iconBg: 'bg-indigo-100',  iconColor: 'text-indigo-600' },
  { key: 'lessonPlan',         Icon: GraduationCap, iconBg: 'bg-teal-100',  iconColor: 'text-teal-600' },
  { key: 'essayMarker',        Icon: PenTool,     iconBg: 'bg-rose-100',    iconColor: 'text-rose-600' },
  { key: 'speakingEvaluator',  Icon: Mic,         iconBg: 'bg-cyan-100',    iconColor: 'text-cyan-600',    tag: 'new' },
  { key: 'aiImageGenerator',   Icon: Image,       iconBg: 'bg-orange-100',  iconColor: 'text-orange-600',  tag: 'new' },
  { key: 'slidesGenerator',    Icon: Presentation, iconBg: 'bg-green-100',  iconColor: 'text-green-600',   tag: 'popular' },
  { key: 'fullCoursePlanner',  Icon: Globe,       iconBg: 'bg-sky-100',     iconColor: 'text-sky-600' },
  { key: 'progressReport',     Icon: School,      iconBg: 'bg-pink-100',    iconColor: 'text-pink-600' },
]

/** Tool catalog content reused verbatim from V2 i18n so VI/EN copy
 *  stays canonical with the production landing — no drift between A/B. */
const ITEM_VI: Record<string, { name: string; desc: string }> = {
  quickQuiz:           { name: 'Bài Kiểm Tra Nhanh',  desc: 'Tạo trắc nghiệm K-12 mọi môn trong vài giây' },
  premiumQuizMaker:    { name: 'Premium QuizMaker',    desc: 'Đề kiểm tra nâng cao, nhiều dạng câu hỏi + bám TOS' },
  studyGuide:          { name: 'Hướng Dẫn Học Tập',    desc: 'Tài liệu học tập đầy đủ cho mọi chương trình' },
  tosAssessment:       { name: 'Đề Theo Ma Trận',      desc: 'Đề kiểm tra bám Bảng Đặc Tả (TOS)' },
  lessonPlan:          { name: 'Kế Hoạch Bài Dạy',     desc: 'Giáo án có cấu trúc cho mọi môn, mọi cấp' },
  interactiveContent:  { name: 'Nội Dung Tương Tác',   desc: 'Mini game + bài tập tương tác hấp dẫn' },
  smartDiagram:        { name: 'Sơ Đồ Thông Minh',     desc: 'AI tự vẽ sơ đồ tư duy, biểu đồ minh hoạ' },
  essayMarker:         { name: 'Chấm Essay Tiếng Anh', desc: 'Chấm bài viết tiếng Anh theo nhiều rubric' },
  speakingEvaluator:   { name: 'Đánh Giá Speaking',    desc: 'Đánh giá nói theo chuẩn IELTS / Cambridge' },
  aiImageGenerator:    { name: 'Tạo Hình Ảnh AI',      desc: 'Tạo hình minh hoạ giáo dục bằng AI' },
  slidesGenerator:     { name: 'Tạo Slides',           desc: 'Slide bài giảng hoàn chỉnh trong vài phút' },
  fullCoursePlanner:   { name: 'Soạn Khoá Học',        desc: 'Thiết kế khoá học có mục tiêu + chương trình' },
  progressReport:      { name: 'Báo Cáo Tiến Độ',      desc: 'Báo cáo cho cả lớp theo template trường' },
}

const ITEM_EN: Record<string, { name: string; desc: string }> = {
  quickQuiz:           { name: 'Quick Quiz',            desc: 'Generate MCQ quizzes for any K-12 subject in seconds' },
  premiumQuizMaker:    { name: 'Premium QuizMaker',     desc: 'Advanced assessments with multiple question types and TOS alignment' },
  studyGuide:          { name: 'Study Guide',            desc: 'Comprehensive study guides tailored to any curriculum' },
  tosAssessment:       { name: 'TOS Assessment',         desc: 'Assessments aligned with Table of Specifications' },
  lessonPlan:          { name: 'Lesson Plan',            desc: 'Structured lesson plans for any subject and grade level' },
  interactiveContent:  { name: 'Interactive Content',    desc: 'Mini games and interactive activities for engaging lessons' },
  smartDiagram:        { name: 'Smart Diagram',          desc: 'AI-generated charts, mind maps, and concept diagrams' },
  essayMarker:         { name: 'Essay Marker',           desc: 'Grade English writing with multiple rubric systems' },
  speakingEvaluator:   { name: 'Speaking Evaluator',     desc: 'Evaluate speaking skills with IELTS-standard criteria' },
  aiImageGenerator:    { name: 'AI Image Generator',     desc: 'Create educational images and illustrations with AI' },
  slidesGenerator:     { name: 'Slides Generator',       desc: 'Complete lecture slide decks generated in minutes' },
  fullCoursePlanner:   { name: 'Full Course Planner',    desc: 'Design entire courses with objectives and curriculum' },
  progressReport:      { name: 'Progress Report',        desc: 'Batch student progress reports using your school template' },
}

const TAG_LABEL_VI = { new: 'Mới', popular: 'Phổ biến' } as const
const TAG_LABEL_EN = { new: 'New', popular: 'Popular' } as const

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
} satisfies import('framer-motion').Variants

export function ToolGrid() {
  const { v3, locale } = useV3Translation()
  const { persona } = usePersona()
  const accent = personaTokens(persona)
  const prefersReducedMotion = useReducedMotion()
  const items = locale === 'vi' ? ITEM_VI : ITEM_EN
  const tagLabels = locale === 'vi' ? TAG_LABEL_VI : TAG_LABEL_EN

  return (
    <section
      id="tools"
      className="relative py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* Background decoration — matches V2 Platform.tsx 326–329 */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.04]" viewBox="0 0 600 600">
          <circle cx="500" cy="100" r="300" fill={`url(#tg-bg-1)`} />
          <defs>
            <radialGradient id="tg-bg-1">
              <stop offset="0%" stopColor={accent.accent} />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
        </svg>
        <svg className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.04]" viewBox="0 0 500 500">
          <circle cx="100" cy="400" r="250" fill={`url(#tg-bg-2)`} />
          <defs>
            <radialGradient id="tg-bg-2">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: accent.text }}
          >
            {locale === 'vi' ? '13+ Mini App AI' : '13+ AI Mini Apps'}
          </motion.span>
          <motion.h2
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="font-extrabold tracking-tight text-text mb-4"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', lineHeight: 1.15 }}
          >
            {locale === 'vi' ? 'Mỗi định dạng nội dung — một mini app' : 'One mini app per content type'}
          </motion.h2>
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-muted leading-relaxed"
          >
            {locale === 'vi'
              ? 'Chọn loại nội dung bạn cần · pick mini app · gen trong vài giây. Không phải một AI tổng quát — một app chuyên biệt cho mỗi định dạng.'
              : 'Pick the content type you need · open the mini app · generate in seconds. Not one generic AI — one specialised app per format.'}
          </motion.p>
        </div>

        {/* Frosted-glass tool card — mirrors V2's bg-white/80 backdrop-blur-md treatment */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/60 overflow-hidden">
          {/* Brand gradient top strip */}
          <div className="h-1.5 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500" />

          <div className="p-6 sm:p-8 lg:p-10">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {TOOLS.map((tool) => {
                const ToolIcon = tool.Icon
                const item = items[tool.key]
                return (
                  <motion.a
                    key={tool.key}
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={cardVariants}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    className="group relative bg-gray-50/70 hover:bg-white rounded-xl border border-transparent hover:border-gray-200 p-4 hover:shadow-sm transition-all duration-200 cursor-pointer block"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <motion.div
                          whileHover={{ scale: 1.08 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                          className={`w-10 h-10 rounded-lg ${tool.iconBg} ${tool.iconColor} flex items-center justify-center`}
                        >
                          <ToolIcon className="w-5 h-5" />
                        </motion.div>
                        <ExternalLink className="w-3.5 h-3.5 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                          <h4 className="text-sm font-semibold text-text">{item.name}</h4>
                          {tool.tag && <TagBadge label={tagLabels[tool.tag]} variant={tool.tag} />}
                        </div>
                        <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.a>
                )
              })}

              {/* App Builder — double-width gradient card (mirrors V2 lines 470–498) */}
              <motion.a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="group relative col-span-2 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 hover:from-violet-100 hover:via-purple-100 hover:to-fuchsia-100 rounded-xl border border-violet-200/60 hover:border-violet-300 p-4 hover:shadow-sm transition-all duration-200 block"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center"
                    >
                      <Rocket className="w-5 h-5 text-white" />
                    </motion.div>
                    <ArrowRight className="w-4 h-4 text-violet-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text mb-0.5">
                      {locale === 'vi' ? 'Tự xây Mini App của bạn' : 'Build your own Mini App'}
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {locale === 'vi'
                        ? 'Trợ lý tuỳ biến · app có cấu trúc · nhiều định dạng output — ý tưởng của bạn, ship được ngay.'
                        : 'Custom assistants · structured apps · multiple output formats — your ideas, instantly deployable.'}
                    </p>
                  </div>
                </div>
              </motion.a>
            </motion.div>

            {/* Inline testimonial — mirrors V2 lines 502–518. Uses v3 testimonials data. */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-start gap-4 max-w-2xl mx-auto">
                <Quote className="w-8 h-8 text-violet-300 shrink-0 mt-1" aria-hidden />
                <div>
                  <p className="text-sm text-text-muted italic leading-relaxed mb-2">
                    {locale === 'vi'
                      ? '"Learneris giúp tôi giảm thời gian tạo đề từ 2 tiếng xuống dưới 5 phút. AI hiểu chính xác trình độ học sinh cần."'
                      : '"Learneris cut my quiz-prep time from 2 hours to under 5 minutes. The AI nails the level my students actually need."'}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-violet-100 text-violet-700 text-xs font-bold flex items-center justify-center">
                      T
                    </div>
                    <span className="text-xs font-semibold text-text">Cô Thanh Nguyễn</span>
                    <span className="text-xs text-text-muted">· Giáo viên tiếng Anh THPT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle persona-aware footer line */}
        {persona && (
          <p className="mt-6 text-center text-sm text-text-muted">
            <Sparkles className="inline w-3.5 h-3.5 mr-1" style={{ color: accent.accent }} aria-hidden />
            {locale === 'vi' ? (
              <>
                <strong style={{ color: accent.text }}>{v3.personas[persona].label}</strong> dùng nhiều nhất:{' '}
                <strong className="text-text">{personaTopApps(persona, locale).join(' · ')}</strong>
              </>
            ) : (
              <>
                Top apps for <strong style={{ color: accent.text }}>{v3.personas[persona].label}</strong>:{' '}
                <strong className="text-text">{personaTopApps(persona, locale).join(' · ')}</strong>
              </>
            )}
          </p>
        )}
      </div>
    </section>
  )
}

function TagBadge({ label, variant }: { label: string; variant: 'new' | 'popular' }) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${
        variant === 'new'
          ? 'bg-emerald-100 text-emerald-700'
          : 'bg-violet-100 text-violet-700'
      }`}
    >
      {label}
    </span>
  )
}

/** Persona → top 3 most-used Mini Apps for the footer hint. */
function personaTopApps(persona: string, locale: 'vi' | 'en'): string[] {
  const items = locale === 'vi' ? ITEM_VI : ITEM_EN
  const map: Record<string, string[]> = {
    gv:  ['premiumQuizMaker', 'lessonPlan', 'slidesGenerator'],
    hs:  ['interactiveContent', 'studyGuide', 'speakingEvaluator'],
    ph:  ['progressReport', 'studyGuide', 'aiImageGenerator'],
    pro: ['speakingEvaluator', 'essayMarker', 'studyGuide'],
    b2b: ['progressReport', 'fullCoursePlanner', 'lessonPlan'],
  }
  const keys = map[persona] ?? ['quickQuiz', 'lessonPlan', 'slidesGenerator']
  return keys.map((k) => items[k]?.name ?? k)
}
