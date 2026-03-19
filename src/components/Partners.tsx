import { useTranslation } from '../i18n'

const partners = [
  { name: 'Google for Startups', abbr: 'G', colors: 'from-green-500 to-blue-500' },
  { name: 'Microsoft for Startups', abbr: 'M', colors: 'from-blue-500 to-cyan-500' },
  { name: 'Google Digital School', abbr: 'GDS', colors: 'from-red-500 to-yellow-500' },
  { name: 'KDI Education', abbr: 'KDI', colors: 'from-purple-500 to-pink-500' },
  { name: 'LMS360', abbr: '360', colors: 'from-indigo-500 to-blue-500' },
  { name: 'ECO Vietnam', abbr: 'ECO', colors: 'from-green-500 to-emerald-500' },
]

function PartnerItem({ p }: { p: typeof partners[0] }) {
  return (
    <div className="flex items-center gap-2.5 px-4 shrink-0">
      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${p.colors} flex items-center justify-center`}>
        <span className="text-white text-xs font-bold">{p.abbr}</span>
      </div>
      <span className="text-sm font-medium text-text-muted whitespace-nowrap">{p.name}</span>
    </div>
  )
}

export function Partners() {
  const { t } = useTranslation()

  return (
    <section className="py-12 border-y border-gray-100 bg-surface overflow-hidden">
      <p className="text-center text-sm font-medium text-text-muted mb-8">
        {t.partners.header}
      </p>
      {/* Scrolling marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee">
          {/* Double the items for seamless loop */}
          {[...partners, ...partners].map((p, i) => (
            <PartnerItem key={`${p.name}-${i}`} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
