import { useTranslation } from '../i18n'

export function Stats() {
  const { t } = useTranslation()

  return (
    <section className="py-16 lg:py-20 bg-surface-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {t.stats.items.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="text-sm text-gray-400 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
