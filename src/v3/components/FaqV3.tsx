import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronDown, MessageCircleQuestion } from 'lucide-react'
import { useV3Translation } from '../i18n'
import { usePersona } from '../PersonaContext'
import { personaTokens } from '../tokens'

export function FaqV3() {
  const { persona } = usePersona()
  const { v3 } = useV3Translation()
  const tokens = personaTokens(persona)
  const prefersReducedMotion = useReducedMotion()
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  const faqs = v3.faq.items

  return (
    <section className="relative py-20 lg:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest"
            style={{ color: tokens.text }}
          >
            <MessageCircleQuestion className="w-3.5 h-3.5" />
            {v3.faq.eyebrow}
          </motion.div>
          <h2 className="font-extrabold tracking-tight text-text" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.2 }}>
            {v3.faq.heading}
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i
            return (
              <div
                key={faq.q}
                className="bg-white rounded-xl border transition-colors"
                style={{ borderColor: isOpen ? tokens.ring : 'rgba(15,23,42,0.08)' }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ ['--tw-ring-color' as string]: tokens.ring }}
                >
                  <span className="text-sm sm:text-base font-semibold text-text">{faq.q}</span>
                  <ChevronDown
                    className="w-4 h-4 shrink-0 transition-transform duration-300"
                    style={{
                      color: isOpen ? tokens.accent : '#9ca3af',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 text-sm text-text-muted leading-relaxed">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
