import { useTranslation } from '../i18n'

export function Partners() {
  const { t } = useTranslation()

  const partners = [
    { name: 'Google for Startups', abbr: 'G', colors: 'from-green-500 to-blue-500' },
    { name: 'Microsoft for Startups', abbr: 'M', colors: 'from-blue-500 to-cyan-500' },
    { name: 'Google Digital School', abbr: 'GDS', colors: 'from-red-500 to-yellow-500' },
    { name: 'KDI Education', abbr: 'KDI', colors: 'from-purple-500 to-pink-500' },
    { name: 'LMS360', abbr: '360', colors: 'from-indigo-500 to-blue-500' },
    { name: 'ECO Vietnam', abbr: 'ECO', colors: 'from-green-500 to-emerald-500' },
  ]

  return (
    <section className="py-12 border-y border-gray-100 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-text-muted mb-8">
          {t.partners.header}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((p) => (
            <div key={p.name} className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${p.colors} flex items-center justify-center`}>
                <span className="text-white text-xs font-bold">{p.abbr}</span>
              </div>
              <span className="text-sm font-medium text-text-muted whitespace-nowrap">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
