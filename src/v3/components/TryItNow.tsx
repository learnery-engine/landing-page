import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Compass, Wand2 } from 'lucide-react'
import { usePersona } from '../PersonaContext'
import { personaTokens } from '../tokens'
import { CompassDemo } from './demos/CompassDemo'
import { MiniAppDemo } from './demos/MiniAppDemo'

// Only shipped surfaces get an inline demo. Lumi is status:'vision'
// (Surfaces grid tags it "Tầm nhìn 2026"), so it must not appear as a
// try-it-now tab — that would read as a live, usable feature.
type DemoKey = 'compass' | 'miniApp'

const DEMO_META = [
  { key: 'compass' as const, label: 'COMPASS · 3 câu',   Icon: Compass, color: '#7C3AED' },
  { key: 'miniApp' as const, label: 'Mini App · Tạo quiz', Icon: Wand2,   color: '#8B5CF6' },
]

/**
 * "Thử ngay tại đây" — section orchestrator. Three inline interactive
 * demos let visitors actually use the product without signing in. Each
 * demo lives in `./demos/` and runs purely client-side so we don't burn
 * tokens / expose rate-limits on a public marketing page.
 *
 * The goal: convert "huh, cool claim" into "wait, this actually works".
 */
export function TryItNow() {
  const { persona } = usePersona()
  const tokens = personaTokens(persona)
  const prefersReducedMotion = useReducedMotion()
  const [activeDemo, setActiveDemo] = useState<DemoKey>('compass')

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.span
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: tokens.text }}
          >
            Thử trực tiếp · không cần đăng ký
          </motion.span>
          <motion.h2
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="font-extrabold tracking-tight text-text mb-4"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', lineHeight: 1.15 }}
          >
            Bấm thử ngay.
          </motion.h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Demo chạy thật trong trình duyệt. Mỗi cái dưới 30 giây — nhanh hơn đọc tiếp.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-6" role="tablist">
          {DEMO_META.map((d) => {
            const isActive = activeDemo === d.key
            const Icon = d.Icon
            return (
              <button
                key={d.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`demo-panel-${d.key}`}
                onClick={() => setActiveDemo(d.key)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border-2 ${
                  isActive
                    ? 'shadow-sm'
                    : 'bg-white border-gray-200 text-text-muted hover:border-gray-300'
                }`}
                style={
                  isActive
                    ? { background: `${d.color}10`, borderColor: d.color, color: d.color }
                    : undefined
                }
              >
                <Icon className="w-4 h-4" />
                <span>{d.label}</span>
              </button>
            )
          })}
        </div>

        {/* Demo panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDemo}
            id={`demo-panel-${activeDemo}`}
            role="tabpanel"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-100/60 overflow-hidden"
          >
            {activeDemo === 'compass' && <CompassDemo />}
            {activeDemo === 'miniApp' && <MiniAppDemo />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
