import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Ms. Thanh Nguyen',
    role: 'High School English Teacher',
    location: 'Ho Chi Minh City',
    quote: 'Learneris cut my quiz creation time from 2 hours to under 5 minutes. The AI understands exactly what level my students need.',
    stars: 5,
    avatar: 'TN',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    name: 'Mr. Duc Tran',
    role: 'Math Department Head',
    location: 'Hanoi',
    quote: 'The lesson plan generator is incredible. It creates structured, curriculum-aligned plans that I can customize in minutes.',
    stars: 5,
    avatar: 'DT',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Ms. Linh Pham',
    role: 'Primary School Teacher',
    location: 'Da Nang',
    quote: 'My students love the interactive content. The games and activities keep them engaged like never before.',
    stars: 5,
    avatar: 'LP',
    color: 'bg-green-100 text-green-700',
  },
  {
    name: 'Mr. Minh Le',
    role: 'Science Teacher',
    location: 'Can Tho',
    quote: 'Smart Diagrams transformed how I teach complex concepts. Students finally visualize what I\'m explaining.',
    stars: 5,
    avatar: 'ML',
    color: 'bg-orange-100 text-orange-700',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Loved by <span className="gradient-text">educators</span>
          </h2>
          <p className="text-lg text-text-muted max-w-xl mx-auto">
            Join thousands of teachers who are already saving hours every week.
          </p>
        </div>

        {/* Desktop: show 3 cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <TestimonialCard t={testimonials[current]} />
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-surface transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-primary w-6' : 'bg-gray-200'}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-surface transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="bg-surface rounded-2xl p-6 border border-gray-100">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: t.stars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-text leading-relaxed mb-6">"{t.quote}"</p>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-sm font-bold`}>
          {t.avatar}
        </div>
        <div>
          <div className="text-sm font-semibold text-text">{t.name}</div>
          <div className="text-xs text-text-muted">{t.role} · {t.location}</div>
        </div>
      </div>
    </div>
  )
}
