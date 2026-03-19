import { useState } from 'react'
import {
  Wand2, Layers, LayoutDashboard, GraduationCap,
  FileQuestion, FileText, BookOpen, LayoutGrid,
  Gamepad2, BarChart3, PenTool, Mic, Image, Presentation,
  Globe, School, Rocket, ArrowRight, ExternalLink, Quote,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
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

/* ── All tools (uniform grid) ── */
const allTools = [
  { key: 'interactiveContent', icon: Gamepad2, iconBg: 'bg-amber-100 text-amber-600' },
  { key: 'premiumQuizMaker', icon: FileText, iconBg: 'bg-violet-100 text-violet-600' },
  { key: 'smartDiagram', icon: BarChart3, iconBg: 'bg-blue-100 text-blue-600' },
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
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
} satisfies import('framer-motion').Variants

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

/* ── Orbit tool icons for AI Suite visual ── */
const orbitTools = [
  { icon: FileQuestion, bg: 'bg-purple-100 text-purple-600', label: 'Quiz' },
  { icon: Presentation, bg: 'bg-green-100 text-green-600', label: 'Slides' },
  { icon: Gamepad2, bg: 'bg-amber-100 text-amber-600', label: 'Games' },
  { icon: PenTool, bg: 'bg-rose-100 text-rose-600', label: 'Essay' },
  { icon: BarChart3, bg: 'bg-blue-100 text-blue-600', label: 'Diagram' },
  { icon: BookOpen, bg: 'bg-emerald-100 text-emerald-600', label: 'Guide' },
]

function PillarVisual({ tab, color }: { tab: string; color: typeof pillarColors[keyof typeof pillarColors] }) {
  return (
    <div className="relative w-[280px] h-[220px]">
      {tab === 'aiSuite' && (
        /* Rotating orbit of tool icons around a central Wand icon */
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Orbit ring */}
          <div className="absolute w-[200px] h-[200px] rounded-full border-2 border-dashed opacity-20" style={{ borderColor: color.gradFrom }} />
          <div className="absolute w-[130px] h-[130px] rounded-full border border-dashed opacity-15" style={{ borderColor: color.gradFrom }} />

          {/* Center icon */}
          <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-200">
            <Wand2 className="w-8 h-8 text-white" />
          </div>

          {/* Orbiting tool icons */}
          <div className="absolute inset-0 animate-orbit">
            {orbitTools.map((tool, i) => {
              const angle = (i * 360) / orbitTools.length
              const radius = 90
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius
              const ToolIcon = tool.icon
              return (
                <div
                  key={i}
                  className="absolute animate-orbit-reverse"
                  style={{ left: `calc(50% + ${x}px - 20px)`, top: `calc(50% + ${y}px - 20px)` }}
                >
                  <div className={`w-10 h-10 rounded-xl ${tool.bg} flex items-center justify-center shadow-md`}>
                    <ToolIcon className="w-5 h-5" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {tab === 'production' && (
        /* Stacked document layers with batch indicators */
        <div className="relative w-full h-full flex items-center justify-center">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1 - i * 0.15, y: -i * 14, scale: 1 - i * 0.03 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="absolute w-[200px] rounded-xl border bg-white shadow-md"
              style={{ borderColor: `${color.gradFrom}30`, height: i === 0 ? '140px' : '130px' }}
            >
              {i === 0 && (
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Layers className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2.5 w-20 bg-gray-200 rounded-full" />
                      <div className="h-2 w-14 bg-gray-100 rounded-full mt-1" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-blue-50 rounded-full" />
                    <div className="h-2 w-4/5 bg-blue-50 rounded-full" />
                    <div className="h-2 w-3/5 bg-blue-50 rounded-full" />
                  </div>
                  <div className="mt-3 flex gap-2">
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-green-100 text-green-600 font-semibold">Shared</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 font-semibold">Library</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
          {/* Batch count badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 300 }}
            className="absolute -top-1 -right-1 w-10 h-10 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center shadow-lg"
          >
            ×12
          </motion.div>
        </div>
      )}

      {tab === 'lms' && (
        /* Dashboard mockup with sidebar + progress bars */
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-[260px] h-[180px] rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden"
          >
            <div className="flex h-full">
              {/* Sidebar */}
              <div className="w-12 bg-green-50 border-r border-green-100 flex flex-col items-center py-3 gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-green-500 flex items-center justify-center">
                  <LayoutDashboard className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="w-6 h-6 rounded bg-green-100" />
                <div className="w-6 h-6 rounded bg-green-100" />
                <div className="w-6 h-6 rounded bg-green-100" />
              </div>
              {/* Main content */}
              <div className="flex-1 p-3">
                <div className="h-2 w-16 bg-gray-200 rounded mb-3" />
                <div className="space-y-2.5">
                  {[85, 62, 45, 78].map((w, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-gray-100 shrink-0" />
                      <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${w}%` }}
                          transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${color.gradFrom}, ${color.gradTo})` }}
                        />
                      </div>
                      <span className="text-[9px] font-semibold text-gray-400 w-6">{w}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {tab === 'aiLiteracy' && (
        /* Concentric rings with grade level badges */
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Rings */}
          {[90, 65, 40].map((r, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="absolute rounded-full border-2"
              style={{
                width: r * 2,
                height: r * 2,
                borderColor: `${color.gradFrom}${i === 0 ? '20' : i === 1 ? '30' : '40'}`,
                background: `radial-gradient(circle, ${color.gradFrom}${i === 2 ? '15' : '05'}, transparent)`,
              }}
            />
          ))}
          {/* Center icon */}
          <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-200">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          {/* Grade badges floating around */}
          {['K-5', '6-8', '9-12'].map((grade, i) => {
            const angle = -90 + i * 120
            const x = Math.cos((angle * Math.PI) / 180) * 75
            const y = Math.sin((angle * Math.PI) / 180) * 75
            return (
              <motion.div
                key={grade}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 + i * 0.12, type: 'spring', stiffness: 300 }}
                className="absolute"
                style={{ left: `calc(50% + ${x}px - 22px)`, top: `calc(50% + ${y}px - 14px)` }}
              >
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white shadow-md text-[11px] font-bold text-amber-600 border border-amber-200">
                  {grade}
                </span>
              </motion.div>
            )
          })}
        </div>
      )}
    </div>
  )
}

/* ── Pillar tab accent colors ── */
const pillarColors = {
  aiSuite: { border: 'border-violet-500', bg: 'bg-violet-50', text: 'text-violet-600', gradFrom: '#8b5cf6', gradTo: '#c084fc' },
  production: { border: 'border-blue-500', bg: 'bg-blue-50', text: 'text-blue-600', gradFrom: '#3b82f6', gradTo: '#93c5fd' },
  lms: { border: 'border-green-500', bg: 'bg-green-50', text: 'text-green-600', gradFrom: '#22c55e', gradTo: '#86efac' },
  aiLiteracy: { border: 'border-amber-500', bg: 'bg-amber-50', text: 'text-amber-600', gradFrom: '#f59e0b', gradTo: '#fcd34d' },
} as const

export function Platform() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState<'aiSuite' | 'production' | 'lms' | 'aiLiteracy'>('aiSuite')
  const activeColor = pillarColors[activeTab]

  return (
    <section id="features" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03]" viewBox="0 0 600 600"><circle cx="500" cy="100" r="300" fill="url(#pg1)" /><defs><radialGradient id="pg1"><stop offset="0%" stopColor="#8b5cf6" /><stop offset="100%" stopColor="transparent" /></radialGradient></defs></svg>
        <svg className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.03]" viewBox="0 0 500 500"><circle cx="100" cy="400" r="250" fill="url(#pg2)" /><defs><radialGradient id="pg2"><stop offset="0%" stopColor="#22c55e" /><stop offset="100%" stopColor="transparent" /></radialGradient></defs></svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {t.v2.platform.heading.before}
            <span className="gradient-text">{t.v2.platform.heading.highlight}</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t.v2.platform.subheading}
          </p>
        </div>

        {/* ── Interactive Pillar Tabs ── */}
        <div className="mb-12">
          {/* Tab strip */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {flowNodes.map((node) => {
              const Icon = node.icon
              const data = t.v2.platform.pillars[node.key]
              const isActive = activeTab === node.key
              const color = pillarColors[node.key]
              return (
                <button
                  key={node.key}
                  onClick={() => setActiveTab(node.key as typeof activeTab)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 border-2 ${
                    isActive
                      ? `${color.bg} ${color.text} ${color.border} shadow-sm`
                      : 'bg-white border-gray-200 text-text-muted hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{data.title}</span>
                </button>
              )
            })}
          </div>

          {/* Active pillar canvas */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className={`relative rounded-2xl ${activeColor.bg} border border-gray-100 p-6 sm:p-8 lg:p-10`}
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Visual illustration */}
                <div className="w-full lg:w-2/5 flex justify-center">
                  <PillarVisual tab={activeTab} color={activeColor} />
                </div>

                {/* Description */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center gap-3 mb-3 justify-center lg:justify-start">
                    {(() => { const Icon = flowNodes.find(n => n.key === activeTab)!.icon; return (
                      <div className={`w-12 h-12 rounded-xl ${flowNodes.find(n => n.key === activeTab)!.iconBg} flex items-center justify-center`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    )})()}
                    <h3 className="text-xl sm:text-2xl font-bold text-text">
                      {t.v2.platform.pillars[activeTab].title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-lg">
                    {t.v2.platform.pillars[activeTab].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── AI Tools Showcase ── */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-gray-100 shadow-lg shadow-gray-100/60 overflow-hidden">
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

            {/* All tools — uniform grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {allTools.map((tool) => {
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

              {/* App Builder — double-width card */}
              <motion.a
                href={`${APP_URL}/app-builder`}
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
                      {t.v2.platform.appBuilder.headline}
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {t.v2.platform.appBuilder.subtext}
                    </p>
                  </div>
                </div>
              </motion.a>
            </motion.div>

            {/* ── Inline testimonial ── */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-start gap-4 max-w-2xl mx-auto">
                <Quote className="w-8 h-8 text-violet-300 shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-text-muted italic leading-relaxed mb-2">
                    {t.testimonials.items[0].quote}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                      {t.testimonials.items[0].name.charAt(0)}
                    </div>
                    <span className="text-xs font-semibold text-text">{t.testimonials.items[0].name}</span>
                    <span className="text-xs text-text-muted">· {t.testimonials.items[0].role}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
