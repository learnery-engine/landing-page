import { FileQuestion, BookOpen, GraduationCap, LayoutGrid, Presentation, PenTool, BarChart3, Gamepad2, Image, Mic, Globe, FileText, School, Bot } from 'lucide-react'

const features = [
  { icon: FileQuestion, name: 'Quick Quiz', desc: 'Generate MCQ quizzes for any K-12 subject in seconds', tag: null, color: 'bg-purple-50 text-purple-600' },
  { icon: FileText, name: 'Premium QuizMaker', desc: 'Advanced assessments with multiple question types and TOS alignment', tag: 'New', color: 'bg-indigo-50 text-indigo-600' },
  { icon: BookOpen, name: 'Study Guide', desc: 'Create comprehensive study guides tailored to any curriculum', tag: null, color: 'bg-teal-50 text-teal-600' },
  { icon: LayoutGrid, name: 'TOS Assessment', desc: 'Generate assessments aligned with Table of Specifications', tag: 'New', color: 'bg-blue-50 text-blue-600' },
  { icon: GraduationCap, name: 'Lesson Plan', desc: 'Structured, flexible lesson plans for any subject and grade', tag: 'New', color: 'bg-green-50 text-green-600' },
  { icon: Gamepad2, name: 'Interactive Content', desc: 'Mini games and interactive activities for engaging lessons', tag: 'Popular', color: 'bg-orange-50 text-orange-600' },
  { icon: BarChart3, name: 'Smart Diagram', desc: 'Visualize concepts with AI-generated charts and diagrams', tag: 'Popular', color: 'bg-violet-50 text-violet-600' },
  { icon: PenTool, name: 'Essay Marker', desc: 'Assess and grade English writing with multiple rubric systems', tag: null, color: 'bg-rose-50 text-rose-600' },
  { icon: Mic, name: 'Speaking Evaluator', desc: 'Evaluate English speaking with IELTS-standard criteria', tag: null, color: 'bg-cyan-50 text-cyan-600' },
  { icon: Image, name: 'AI Image Generator', desc: 'Create educational images and illustrations with AI', tag: 'Preview', color: 'bg-amber-50 text-amber-600' },
  { icon: Presentation, name: 'Slides Generator', desc: 'Complete lecture slide decks generated in minutes', tag: null, color: 'bg-sky-50 text-sky-600' },
  { icon: Globe, name: 'Full Course Planner', desc: 'Design entire courses including objectives and curriculum', tag: null, color: 'bg-emerald-50 text-emerald-600' },
  { icon: School, name: 'Progress Report', desc: 'Batch student progress reports using your school template', tag: 'Org', color: 'bg-pink-50 text-pink-600' },
  { icon: Bot, name: 'AI App Builder', desc: 'Create and publish your own custom AI teaching assistant', tag: null, color: 'bg-gray-50 text-gray-600' },
]

const tagColors: Record<string, string> = {
  New: 'bg-green-100 text-green-700',
  Popular: 'bg-orange-100 text-orange-700',
  Preview: 'bg-blue-100 text-blue-700',
  Org: 'bg-purple-100 text-purple-700',
}

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Everything you need to{' '}
            <span className="gradient-text">teach smarter</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            14 AI-powered tools designed specifically for educators. From quiz generation to full course planning — all in one platform.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.name}
                className="group relative bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg hover:shadow-gray-100/80 hover:border-gray-200 transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-3.5">
                  <div className={`w-11 h-11 rounded-xl ${f.color} flex items-center justify-center shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-text truncate">{f.name}</h3>
                      {f.tag && (
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${tagColors[f.tag] || 'bg-gray-100 text-gray-600'}`}>
                          {f.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
