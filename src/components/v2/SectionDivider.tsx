export function SectionDivider({ color = 'white', flip = false }: { color?: string; flip?: boolean }) {
  const fill = color === 'white' ? '#ffffff' : color === 'surface' ? '#f8fafc' : color
  return (
    <div className={`relative -mt-px -mb-px ${flip ? 'rotate-180' : ''}`}>
      <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-12 lg:h-14" preserveAspectRatio="none">
        <path d="M0 56V24C240 4 480 0 720 8C960 16 1200 36 1440 24V56H0Z" fill={fill} />
      </svg>
    </div>
  )
}
