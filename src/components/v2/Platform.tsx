import {
  Wand2, Layers, LayoutDashboard, GraduationCap,
  FileQuestion, FileText, BookOpen, LayoutGrid,
  Gamepad2, BarChart3, PenTool, Mic, Image, Presentation,
  Globe, School, Rocket, ArrowRight, ExternalLink, ChevronRight,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from '../../i18n'

const APP_URL = 'https://ai.learneris.com'

/* ── Flow strip: 4 pillars as medium cards ── */
const flowNodes = [
  {
    key: 'aiSuite' as const,
    icon: Wand2,
    iconBg: 'bg-violet-100 text-violet-600',
  },
  {
    key: 'production' as const,
    icon: Layers,
    iconBg: 'bg-blue-100 text-blue-600',
  },
  {
    key: 'lms' as const,
    icon: LayoutDashboard,
    iconBg: 'bg-green-100 text-green-600',
  },
  {
    key: 'aiLiteracy' as const,
    icon: GraduationCap,
    iconBg: 'bg-amber-100 text-amber-600',
  },
]

/* ── Featured tools (spotlight row) ── */
const featuredTools = [
  {
    key: 'interactiveContent',
    icon: Gamepad2,
    iconBg: 'bg-amber-100 text-amber-600',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    key: 'premiumQuizMaker',
    icon: FileText,
    iconBg: 'bg-violet-100 text-violet-600',
    gradient: 'from-violet-400 to-purple-600',
  },
  {
    key: 'smartDiagram',
    icon: BarChart3,
    iconBg: 'bg-blue-100 text-blue-600',
    gradient: 'from-blue-400 to-cyan-500',
  },
]

/* ── Catalog tools (remaining 10) ── */
const catalogTools = [
  { key: 'quickQuiz', icon: FileQuestion, iconBg: 'bg-purple-100 text-purple-600' },
  { key: 'studyGuide', icon: BookOpen, iconBg: 'bg-emerald-100 text-emerald-600' },
  { key: 'tosAssessment', icon: LayoutGrid, iconBg: 'bg-indigo-100 text-indigo-600' },
  { key: 'lessonPlan', icon: GraduationCap, iconBg: 'bg-teal-100 text-teal-600' },
  { key: 'essayMarker', icon: PenTool, iconBg: 'bg-rose-100 text-rose-600' },
  { key: 'speakingEvaluator', icon: Mic, iconBg: 'bg-cyan-100 text-cyan-600' },
  { key: 'aiImageGenerator', icon: Image, iconBg: 'bg-orange-100 text-orange-600' },
  { key: 'slidesGenerator', icon: Presentation, iconBg: 'bg-green-100 text-green-600' },
  { key: 'fullCoursePlanner', icon: Globe, iconBg: 'bg-sky-100 text-sky-600' },
  { key: 'progressReport', icon: School, iconBg: 'bg-pink-100 text-pink-600' },
]

/* ── Animation variants ── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

function TagBadge({ label }: { label: string }) {
  const isNew = label === 'New' || label === 'Mới'
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${
        isNew
          ? 'bg-emerald-100 text-emerald-700'
          : 'bg-violet-100 text-violet-700'
      }`}
    >
      {label}
    </span>
  )
}

export function Platform() {
  const { t } = useTranslation()

  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {t.v2.platform.heading.before}
            <span className="gradient-text">{t.v2.platform.heading.highlight}</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t.v2.platform.subheading}
          </p>
        </div>

        {/* ── Pillar Cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-0 mb-10 lg:mb-14">
          {flowNodes.map((node, i) => {
            const Icon = node.icon
            const data = t.v2.platform.pillars[node.key]
            return (
              <div key={node.key} className="relative flex items-center">
                {/* Pillar card */}
                <div className="flex-1 bg-gray-50 rounded-xl p-4 lg:p-5 hover:bg-gray-100/80 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-11 h-11 rounded-xl ${node.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <h3 className="text-sm font-bold text-text leading-tight">{data.title}</h3>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">{data.description}</p>
                </div>
                {/* Arrow connector (desktop only, not on last) */}
                {i < flowNodes.length - 1 && (
                  <ChevronRight className="hidden lg:block w-5 h-5 text-gray-300 shrink-0 -mr-2.5 z-10" />
                )}
              </div>
            )
          })}
        </div>

        {/* ── AI Tools Showcase ── */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-100/60 overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500" />
          <div className="p-6 sm:p-8">

            {/* Section header */}
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-text mb-1">
                {t.v2.platform.tools.sectionTitle}
              </h3>
              <p className="text-sm text-text-muted">
                {t.v2.platform.tools.sectionSubtitle}
              </p>
            </div>

            {/* Featured tools — 3 spotlight cards */}
            <motion.div
              className="grid md:grid-cols-3 gap-4 mb-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {featuredTools.map((tool) => {
                const ToolIcon = tool.icon
                const tag = t.v2.platform.tools.tags[tool.key]
                return (
                  <motion.div
                    key={tool.key}
                    variants={cardVariants}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="group relative bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-200 cursor-default"
                  >
                    {/* Top accent line */}
                    <div className={`absolute top-0 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r ${tool.gradient} opacity-60`} />

                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        className={`w-12 h-12 rounded-xl ${tool.iconBg} flex items-center justify-center shrink-0`}
                      >
                        <ToolIcon className="w-6 h-6" />
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h4 className="text-sm font-bold text-text">
                            {t.v2.platform.tools.items[tool.key]}
                          </h4>
                          {tag && <TagBadge label={tag} />}
                        </div>
                        <p className="text-xs text-text-muted leading-relaxed">
                          {t.v2.platform.tools.descriptions[tool.key]}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Catalog tools — 5-col grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {catalogTools.map((tool) => {
                const ToolIcon = tool.icon
                const tag = t.v2.platform.tools.tags[tool.key]
                return (
                  <motion.div
                    key={tool.key}
                    variants={cardVariants}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    className="group relative bg-gray-50/70 hover:bg-white rounded-xl border border-transparent hover:border-gray-200 p-4 hover:shadow-sm transition-all duration-200 cursor-default"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <motion.div
                          whileHover={{ scale: 1.08 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                          className={`w-10 h-10 rounded-lg ${tool.iconBg} flex items-center justify-center`}
                        >
                          <ToolIcon className="w-5 h-5" />
                        </motion.div>
                        <ExternalLink className="w-3.5 h-3.5 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                          <h4 className="text-sm font-semibold text-text">
                            {t.v2.platform.tools.items[tool.key]}
                          </h4>
                          {tag && <TagBadge label={tag} />}
                        </div>
                        <p className="text-xs text-text-muted leading-relaxed">
                          {t.v2.platform.tools.descriptions[tool.key]}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}

              {/* App Builder — double-width card inside the catalog grid */}
              <motion.a
                href={`${APP_URL}/app-builder`}
                variants={cardVariants}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="group relative col-span-2 sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 hover:from-violet-100 hover:via-purple-100 hover:to-fuchsia-100 rounded-xl border border-violet-200/60 hover:border-violet-300 p-4 hover:shadow-sm transition-all duration-200 block"
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
                      {t.v2.platform.appBuilder.headline}
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {t.v2.platform.appBuilder.subtext}
                    </p>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
