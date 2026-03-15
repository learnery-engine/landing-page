import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useTranslation } from '../i18n'

const avatarStyles = [
  { avatar: 'TN', color: 'bg-purple-100 text-purple-700' },
  { avatar: 'DT', color: 'bg-blue-100 text-blue-700' },
  { avatar: 'LP', color: 'bg-green-100 text-green-700' },
  { avatar: 'ML', color: 'bg-orange-100 text-orange-700' },
]

export function Testimonials() {
  const { t } = useTranslation()
  const items = t.testimonials.items
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? items.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === items.length - 1 ? 0 : c + 1))

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {t.testimonials.heading.before}
            <span className="gradient-text">{t.testimonials.heading.highlight}</span>
          </h2>
          <p className="text-lg text-text-muted max-w-xl mx-auto">
            {t.testimonials.subheading}
          </p>
        </div>

        {/* Desktop: show 3 cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item, i) => (
            <TestimonialCard key={item.name} item={item} style={avatarStyles[i]} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <TestimonialCard item={items[current]} style={avatarStyles[current]} />
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-surface transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
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

interface TestimonialItem {
  name: string
  role: string
  location: string
  quote: string
}

function TestimonialCard({ item, style }: { item: TestimonialItem; style: typeof avatarStyles[0] }) {
  return (
    <div className="bg-surface rounded-2xl p-6 border border-gray-100">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-text leading-relaxed mb-6">&ldquo;{item.quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full ${style.color} flex items-center justify-center text-sm font-bold`}>
          {style.avatar}
        </div>
        <div>
          <div className="text-sm font-semibold text-text">{item.name}</div>
          <div className="text-xs text-text-muted">{item.role} · {item.location}</div>
        </div>
      </div>
    </div>
  )
}
