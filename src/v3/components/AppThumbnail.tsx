/**
 * Mini app-UI thumbnails for the student-built-apps marquee.
 *
 * Each variant renders a tiny phone-screen-style preview that reads as
 * "this is an actual app" rather than "here's an emoji". The art is
 * deliberately abstract — colored bars, blocks, and shapes — so we don't
 * need to ship real screenshots (which would require consent + ongoing
 * maintenance) and so it scales arbitrarily.
 *
 * Frame: rounded card with a tinted status-bar strip + interior content
 * keyed off the variant. The accent color comes from each app's brand
 * color so the marquee stays visually varied.
 *
 * Variants chosen to cover the K-12 app corpus:
 *   quiz       — multiple-choice / radio rows
 *   flashcard  — stacked cards
 *   counter    — big stat + label (for trackers, calorie/timer/score apps)
 *   text       — text rows (translator, summarizer, reader)
 *   tracker    — bar chart (habit, garden, study-time)
 *   game       — colored grid (memory, match, color-mix)
 *   chat       — speech bubbles (speaking, pronunciation)
 */
export type AppThumbnailVariant = 'quiz' | 'flashcard' | 'counter' | 'text' | 'tracker' | 'game' | 'chat'

export function AppThumbnail({
  variant,
  color,
  className,
}: {
  variant: AppThumbnailVariant
  color: string
  className?: string
}) {
  return (
    <div
      className={`relative rounded-lg overflow-hidden shrink-0 ${className ?? ''}`}
      style={{
        width: 76,
        height: 64,
        background: '#ffffff',
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08), 0 2px 6px -2px rgba(0,0,0,0.35)',
      }}
      aria-hidden
    >
      {/* Status-bar strip — keys to the app's brand color */}
      <div className="h-2 w-full flex items-center justify-between px-1.5" style={{ background: color }}>
        <span className="w-0.5 h-0.5 rounded-full" style={{ background: '#ffffff90' }} />
        <span className="w-3 h-0.5 rounded-full" style={{ background: '#ffffff60' }} />
        <span className="w-0.5 h-0.5 rounded-full" style={{ background: '#ffffff90' }} />
      </div>
      {/* Body */}
      <div className="absolute inset-x-0 bottom-0 top-2 p-1.5">
        {renderVariant(variant, color)}
      </div>
    </div>
  )
}

function renderVariant(variant: AppThumbnailVariant, color: string): React.ReactNode {
  switch (variant) {
    case 'quiz':       return <QuizThumb color={color} />
    case 'flashcard':  return <FlashcardThumb color={color} />
    case 'counter':    return <CounterThumb color={color} />
    case 'text':       return <TextThumb color={color} />
    case 'tracker':    return <TrackerThumb color={color} />
    case 'game':       return <GameThumb color={color} />
    case 'chat':       return <ChatThumb color={color} />
  }
}

/* ──────────────────────────────────────────────────────────────────────── */

function QuizThumb({ color }: { color: string }) {
  // 3 radio rows; first one selected
  return (
    <div className="flex flex-col gap-1 h-full justify-center">
      {[true, false, false].map((selected, i) => (
        <div key={i} className="flex items-center gap-1">
          <div
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: selected ? color : 'transparent', border: `1px solid ${selected ? color : '#cbd5e1'}` }}
          />
          <div className="h-1 flex-1 rounded-full" style={{ background: selected ? `${color}55` : '#e2e8f0' }} />
        </div>
      ))}
    </div>
  )
}

function FlashcardThumb({ color }: { color: string }) {
  // Two stacked cards, slight rotation offset on the back
  return (
    <div className="relative h-full">
      <div
        className="absolute inset-x-2 inset-y-1.5 rounded transform -rotate-3"
        style={{ background: `${color}30`, border: `1px solid ${color}55` }}
      />
      <div
        className="absolute inset-x-2 inset-y-1.5 rounded transform rotate-2 flex items-center justify-center"
        style={{ background: '#ffffff', border: `1px solid ${color}` }}
      >
        <div className="flex flex-col gap-0.5 w-3/4">
          <div className="h-0.5 rounded-full" style={{ background: color }} />
          <div className="h-0.5 w-2/3 rounded-full" style={{ background: `${color}80` }} />
        </div>
      </div>
    </div>
  )
}

function CounterThumb({ color }: { color: string }) {
  // Big number stat + small label
  return (
    <div className="flex flex-col items-center justify-center h-full gap-0.5">
      <div className="text-[14px] font-extrabold leading-none tabular-nums" style={{ color }}>
        347
      </div>
      <div className="h-0.5 w-6 rounded-full" style={{ background: `${color}55` }} />
    </div>
  )
}

function TextThumb({ color }: { color: string }) {
  // Translator-style: 2 short rows with an arrow between
  return (
    <div className="flex flex-col gap-1 h-full justify-center px-0.5">
      <div className="flex items-center gap-1">
        <div className="text-[6px] font-bold uppercase shrink-0" style={{ color }}>EN</div>
        <div className="h-1 flex-1 rounded-full" style={{ background: `${color}40` }} />
      </div>
      <div className="text-[6px] text-center font-bold leading-none opacity-50" style={{ color }}>↓</div>
      <div className="flex items-center gap-1">
        <div className="text-[6px] font-bold uppercase shrink-0" style={{ color }}>VI</div>
        <div className="h-1 flex-1 rounded-full" style={{ background: `${color}80` }} />
      </div>
    </div>
  )
}

function TrackerThumb({ color }: { color: string }) {
  // 5 bars of varying heights — like a weekly progress chart
  const heights = [40, 65, 30, 80, 55]
  return (
    <div className="flex items-end justify-between gap-0.5 h-full pb-0.5 px-0.5">
      {heights.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm"
          style={{ height: `${h}%`, background: i === heights.length - 1 ? color : `${color}55` }}
        />
      ))}
    </div>
  )
}

function GameThumb({ color }: { color: string }) {
  // 3x3 colored cell grid, some active
  // Use the color + complementary shades for visual variety
  const cells = [
    color, `${color}33`, color,
    `${color}33`, color, `${color}33`,
    color, `${color}33`, `${color}33`,
  ]
  return (
    <div className="grid grid-cols-3 gap-0.5 h-full">
      {cells.map((c, i) => (
        <div key={i} className="rounded-sm" style={{ background: c }} />
      ))}
    </div>
  )
}

function ChatThumb({ color }: { color: string }) {
  // Two speech bubbles, alternating sides
  return (
    <div className="flex flex-col gap-1 h-full justify-center">
      <div className="flex justify-start">
        <div
          className="rounded-md rounded-tl-none px-1.5 py-0.5"
          style={{ background: `${color}33`, minWidth: 24 }}
        >
          <div className="h-0.5 w-4 rounded-full" style={{ background: color }} />
        </div>
      </div>
      <div className="flex justify-end">
        <div
          className="rounded-md rounded-tr-none px-1.5 py-0.5"
          style={{ background: color, minWidth: 18 }}
        >
          <div className="h-0.5 w-3 rounded-full bg-white/80" />
        </div>
      </div>
    </div>
  )
}
