import { MousePointerClick, Wand2, Download } from 'lucide-react'

const steps = [
  {
    icon: MousePointerClick,
    step: '01',
    title: 'Choose Your Tool',
    description: 'Pick from 14+ AI-powered tools — quizzes, lesson plans, diagrams, interactive games, and more.',
    color: 'bg-primary text-white',
  },
  {
    icon: Wand2,
    step: '02',
    title: 'Describe What You Need',
    description: 'Enter your subject, grade level, topic, and any specific requirements. Our AI understands educational context.',
    color: 'bg-accent text-white',
  },
  {
    icon: Download,
    step: '03',
    title: 'Get & Customize',
    description: 'Receive ready-to-use content in seconds. Edit, export, or share directly with your students.',
    color: 'bg-primary-dark text-white',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Ready in <span className="gradient-text">3 simple steps</span>
          </h2>
          <p className="text-lg text-text-muted max-w-xl mx-auto">
            No training required. Start creating professional teaching materials instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.step} className="relative text-center">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-gray-200 to-gray-100" />
                )}
                <div className={`w-20 h-20 ${s.color} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Step {s.step}</div>
                <h3 className="text-xl font-bold text-text mb-3">{s.title}</h3>
                <p className="text-text-muted leading-relaxed max-w-xs mx-auto">{s.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
