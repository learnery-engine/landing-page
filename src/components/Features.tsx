import { FileQuestion, BookOpen, GraduationCap, LayoutGrid, Presentation, PenTool, BarChart3, Gamepad2, Image, Mic, Globe, FileText, School, Bot, ExternalLink, LayoutDashboard, Library, Award } from 'lucide-react'
import { useTranslation } from '../i18n'
import { navigate } from '../lib/navigate'

const features = [
  { key: 'lms', icon: LayoutDashboard, tag: 'popular' as const, color: 'bg-fuchsia-50 text-fuchsia-600' },
  { key: 'contentLibrary', icon: Library, tag: 'new' as const, color: 'bg-lime-50 text-lime-600' },
  { key: 'k12Curriculum', icon: Award, tag: 'org' as const, color: 'bg-red-50 text-red-600' },
  { key: 'quickQuiz', icon: FileQuestion, tag: null, color: 'bg-purple-50 text-purple-600' },
  { key: 'premiumQuizMaker', icon: FileText, tag: 'new' as const, color: 'bg-indigo-50 text-indigo-600' },
  { key: 'studyGuide', icon: BookOpen, tag: null, color: 'bg-teal-50 text-teal-600' },
  { key: 'tosAssessment', icon: LayoutGrid, tag: 'new' as const, color: 'bg-blue-50 text-blue-600' },
  { key: 'lessonPlan', icon: GraduationCap, tag: 'new' as const, color: 'bg-green-50 text-green-600' },
  { key: 'interactiveContent', icon: Gamepad2, tag: 'popular' as const, color: 'bg-orange-50 text-orange-600' },
  { key: 'smartDiagram', icon: BarChart3, tag: 'popular' as const, color: 'bg-violet-50 text-violet-600' },
  { key: 'essayMarker', icon: PenTool, tag: null, color: 'bg-rose-50 text-rose-600' },
  { key: 'speakingEvaluator', icon: Mic, tag: null, color: 'bg-cyan-50 text-cyan-600' },
  { key: 'aiImageGenerator', icon: Image, tag: 'preview' as const, color: 'bg-amber-50 text-amber-600' },
  { key: 'slidesGenerator', icon: Presentation, tag: null, color: 'bg-sky-50 text-sky-600' },
  { key: 'fullCoursePlanner', icon: Globe, tag: null, color: 'bg-emerald-50 text-emerald-600' },
  { key: 'progressReport', icon: School, tag: 'org' as const, color: 'bg-pink-50 text-pink-600' },
  { key: 'aiAppBuilder', icon: Bot, tag: null, color: 'bg-gray-50 text-gray-600' },
]

const tagColors: Record<string, string> = {
  new: 'bg-green-100 text-green-700',
  popular: 'bg-orange-100 text-orange-700',
  preview: 'bg-blue-100 text-blue-700',
  org: 'bg-purple-100 text-purple-700',
}

export function Features() {
  const { t } = useTranslation()

  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {t.features.heading.before}
            <span className="gradient-text">{t.features.heading.highlight}</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t.features.subheading}
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((f) => {
            const Icon = f.icon
            const item = t.features.items[f.key]
            return (
              <a key={f.key} href="/signup" onClick={(e) => { e.preventDefault(); navigate('/signup') }}
                className="group relative bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg hover:shadow-gray-100/80 hover:border-gray-200 transition-all duration-300">
                <div className="flex items-start gap-3.5">
                  <div className={`w-11 h-11 rounded-xl ${f.color} flex items-center justify-center shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-text truncate">{item.name}</h3>
                      {f.tag && (
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${tagColors[f.tag] || 'bg-gray-100 text-gray-600'}`}>
                          {t.features.tags[f.tag]}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-primary shrink-0 mt-0.5 transition-colors" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
