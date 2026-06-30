/**
 * Mini app-UI thumbnails for the student-built-apps marquee + featured
 * spotlights.
 *
 * Two sizes:
 *   - `small`  (76×64)  — featured-student spotlight cards
 *   - `medium` (120×100) — marquee tiles (the "wall" of student apps)
 *
 * Each variant renders a phone-screen-style preview keyed off the app
 * category. Deliberately abstract (no real screenshots; consent + drift
 * risk) but rich enough to read as "this is an actual app screen" at
 * marquee scale.
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
export type AppThumbnailSize = 'small' | 'medium'

const SIZE_DIMS: Record<AppThumbnailSize, { w: number; h: number; statusBarH: number; pad: number }> = {
  small:  { w: 76,  h: 64,  statusBarH: 8,  pad: 6 },
  medium: { w: 120, h: 100, statusBarH: 12, pad: 10 },
}

export function AppThumbnail({
  variant,
  color,
  size = 'small',
  appLabel,
  className,
}: {
  variant: AppThumbnailVariant
  color: string
  size?: AppThumbnailSize
  /** Optional short title shown in the phone-frame title bar at medium size. */
  appLabel?: string
  className?: string
}) {
  const dims = SIZE_DIMS[size]
  return (
    <div
      className={`relative rounded-xl overflow-hidden shrink-0 ${className ?? ''}`}
      style={{
        width: dims.w,
        height: dims.h,
        background: '#ffffff',
        boxShadow:
          'inset 0 0 0 1px rgba(255,255,255,0.08), 0 4px 14px -4px rgba(0,0,0,0.45), 0 1px 2px rgba(0,0,0,0.3)',
      }}
      aria-hidden
    >
      {/* Status-bar strip — a darkened tint of the app's brand color. Darkened
          (mixed toward slate-900) so the small uppercase appLabel in white
          clears WCAG AA (4.5:1) for EVERY brand color — a saturated mid-tone
          strip can't host readable text at any text color. */}
      <div
        className="w-full flex items-center justify-between"
        style={{ height: dims.statusBarH, padding: '0 6px', background: darkenToward(color, 0.58) }}
      >
        <span className="w-1 h-1 rounded-full" style={{ background: '#ffffffcc' }} />
        {size === 'medium' && (
          <span className="text-[7px] font-bold uppercase tracking-widest text-white truncate max-w-[80px]">
            {appLabel || ''}
          </span>
        )}
        <span className="w-1 h-1 rounded-full" style={{ background: '#ffffffcc' }} />
      </div>
      {/* Body */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{ top: dims.statusBarH, padding: dims.pad }}
      >
        {renderVariant(variant, color, size)}
      </div>
    </div>
  )
}

function renderVariant(variant: AppThumbnailVariant, color: string, size: AppThumbnailSize): React.ReactNode {
  switch (variant) {
    case 'quiz':       return <QuizThumb color={color} size={size} />
    case 'flashcard':  return <FlashcardThumb color={color} size={size} />
    case 'counter':    return <CounterThumb color={color} size={size} />
    case 'text':       return <TextThumb color={color} size={size} />
    case 'tracker':    return <TrackerThumb color={color} size={size} />
    case 'game':       return <GameThumb color={color} size={size} />
    case 'chat':       return <ChatThumb color={color} size={size} />
  }
}

/* ──────────────────────────────────────────────────────────────────────── */

function QuizThumb({ color, size }: { color: string; size: AppThumbnailSize }) {
  // Small: 3 radio rows. Medium: 4 rows + a tiny question header.
  const rows = size === 'medium' ? 4 : 3
  const selectedIdx = 1
  const dot = size === 'medium' ? 'w-2 h-2' : 'w-1.5 h-1.5'
  const barH = size === 'medium' ? 'h-1.5' : 'h-1'
  return (
    <div className="flex flex-col gap-1 h-full justify-center">
      {size === 'medium' && (
        // Tiny "question" prompt strip
        <div className="h-1.5 w-3/4 rounded-full mb-1" style={{ background: `${color}40` }} />
      )}
      {Array.from({ length: rows }).map((_, i) => {
        const selected = i === selectedIdx
        return (
          <div key={i} className={`flex items-center ${size === 'medium' ? 'gap-2' : 'gap-1'}`}>
            <div
              className={`${dot} rounded-full shrink-0`}
              style={{ background: selected ? color : 'transparent', border: `1px solid ${selected ? color : '#cbd5e1'}` }}
            />
            <div
              className={`${barH} flex-1 rounded-full`}
              style={{ background: selected ? `${color}66` : '#e2e8f0', width: i % 2 ? '88%' : '70%' }}
            />
          </div>
        )
      })}
    </div>
  )
}

function FlashcardThumb({ color, size }: { color: string; size: AppThumbnailSize }) {
  // Stacked cards with rotation offset. Medium has 3 visible cards + content.
  const showThird = size === 'medium'
  return (
    <div className="relative h-full">
      {showThird && (
        <div
          className="absolute inset-x-3 inset-y-2 rounded-md transform -rotate-6"
          style={{ background: `${color}22`, border: `1px solid ${color}33` }}
        />
      )}
      <div
        className="absolute inset-x-3 inset-y-2 rounded-md transform -rotate-3"
        style={{ background: `${color}40`, border: `1px solid ${color}55` }}
      />
      <div
        className="absolute inset-x-3 inset-y-2 rounded-md transform rotate-2 flex flex-col justify-center items-center gap-1"
        style={{ background: '#ffffff', border: `1px solid ${color}`, padding: size === 'medium' ? 8 : 4 }}
      >
        <div className={`${size === 'medium' ? 'h-1.5' : 'h-0.5'} w-3/4 rounded-full`} style={{ background: color }} />
        <div className={`${size === 'medium' ? 'h-1' : 'h-0.5'} w-1/2 rounded-full`} style={{ background: `${color}80` }} />
        {size === 'medium' && (
          <div className="h-1 w-2/3 rounded-full mt-0.5" style={{ background: `${color}55` }} />
        )}
      </div>
    </div>
  )
}

function CounterThumb({ color, size }: { color: string; size: AppThumbnailSize }) {
  // Big number stat. Medium adds a label, mini progress bar, and a "today" badge.
  const fontSize = size === 'medium' ? 28 : 14
  return (
    <div className="flex flex-col items-center justify-center h-full gap-1">
      {size === 'medium' && (
        // Fixed slate (not the brand color at low opacity) so this small
        // label clears WCAG AA on the white phone body for every app color.
        <div className="text-[7px] font-bold uppercase tracking-widest" style={{ color: '#475569' }}>
          Hôm nay
        </div>
      )}
      <div
        className="font-extrabold leading-none tabular-nums"
        style={{ color, fontSize, letterSpacing: '-0.04em' }}
      >
        {size === 'medium' ? '1,247' : '347'}
      </div>
      {size === 'medium' ? (
        <>
          <div className="text-[7px] font-semibold" style={{ color: '#475569' }}>kcal</div>
          <div className="w-full h-1 rounded-full mt-1" style={{ background: '#e2e8f0' }}>
            <div className="h-full rounded-full" style={{ width: '64%', background: color }} />
          </div>
        </>
      ) : (
        <div className="h-0.5 w-6 rounded-full" style={{ background: `${color}55` }} />
      )}
    </div>
  )
}

function TextThumb({ color, size }: { color: string; size: AppThumbnailSize }) {
  // Translator: source language row, arrow, target row. Medium has fuller content.
  return (
    <div className={`flex flex-col h-full justify-center ${size === 'medium' ? 'gap-1.5 px-1' : 'gap-1 px-0.5'}`}>
      <div className={`flex items-center ${size === 'medium' ? 'gap-2' : 'gap-1'}`}>
        <div className={`${size === 'medium' ? 'text-[8px]' : 'text-[6px]'} font-bold uppercase shrink-0`} style={{ color }}>EN</div>
        <div className={`${size === 'medium' ? 'h-1.5' : 'h-1'} flex-1 rounded-full`} style={{ background: `${color}40` }} />
      </div>
      <div className={`${size === 'medium' ? 'text-[10px]' : 'text-[6px]'} text-center font-bold leading-none opacity-60`} style={{ color }}>↓</div>
      <div className={`flex items-center ${size === 'medium' ? 'gap-2' : 'gap-1'}`}>
        <div className={`${size === 'medium' ? 'text-[8px]' : 'text-[6px]'} font-bold uppercase shrink-0`} style={{ color }}>VI</div>
        <div className={`${size === 'medium' ? 'h-1.5' : 'h-1'} flex-1 rounded-full`} style={{ background: color }} />
      </div>
      {size === 'medium' && (
        <div className="h-1 w-2/3 rounded-full mt-0.5 mx-auto" style={{ background: `${color}50` }} />
      )}
    </div>
  )
}

function TrackerThumb({ color, size }: { color: string; size: AppThumbnailSize }) {
  // Bar chart. Medium = 7 bars (weekly), with axis line.
  const heights = size === 'medium' ? [30, 55, 42, 70, 38, 85, 60] : [40, 65, 30, 80, 55]
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-end justify-between gap-0.5 flex-1 pb-0.5" style={{ paddingLeft: 2, paddingRight: 2 }}>
        {heights.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t"
            style={{
              height: `${h}%`,
              background: i === heights.length - 2 ? color : `${color}55`,
            }}
          />
        ))}
      </div>
      {size === 'medium' && (
        <div className="h-px w-full" style={{ background: `${color}30` }} />
      )}
    </div>
  )
}

function GameThumb({ color, size }: { color: string; size: AppThumbnailSize }) {
  // Colored cell grid. Small = 3x3, Medium = 4x4 with one cell highlighted as "active".
  const dim = size === 'medium' ? 4 : 3
  const cells = useMemoSeed(dim * dim, color)
  return (
    <div className={`grid h-full gap-0.5`} style={{ gridTemplateColumns: `repeat(${dim}, 1fr)` }}>
      {cells.map((c, i) => (
        <div key={i} className="rounded-sm" style={{ background: c }} />
      ))}
    </div>
  )
}

// Deterministic-ish color pattern based on the dim so each variant feels consistent across renders.
function useMemoSeed(n: number, color: string): string[] {
  // Simple alternating + sprinkled pattern. Not random — stable across renders.
  const out: string[] = []
  for (let i = 0; i < n; i++) {
    if (i % 5 === 0) out.push(color)
    else if (i % 3 === 0) out.push(`${color}66`)
    else if (i % 2 === 0) out.push(`${color}33`)
    else out.push(`${color}22`)
  }
  return out
}

function ChatThumb({ color, size }: { color: string; size: AppThumbnailSize }) {
  // Speech bubbles. Medium has 3 bubbles + an avatar dot.
  const bubbles = size === 'medium' ? 3 : 2
  return (
    <div className={`flex flex-col h-full ${size === 'medium' ? 'gap-2 justify-center' : 'gap-1 justify-center'}`}>
      {bubbles >= 1 && (
        <div className="flex justify-start items-end gap-1">
          {size === 'medium' && (
            <div className="w-3 h-3 rounded-full shrink-0" style={{ background: `${color}80` }} />
          )}
          <div
            className={`${size === 'medium' ? 'rounded-xl rounded-bl-sm px-2.5 py-1.5' : 'rounded-md rounded-tl-none px-1.5 py-0.5'}`}
            style={{ background: `${color}33`, minWidth: size === 'medium' ? 50 : 24 }}
          >
            <div className={`${size === 'medium' ? 'h-1.5 w-10' : 'h-0.5 w-4'} rounded-full`} style={{ background: color }} />
          </div>
        </div>
      )}
      {bubbles >= 2 && (
        <div className="flex justify-end">
          <div
            className={`${size === 'medium' ? 'rounded-xl rounded-br-sm px-2.5 py-1.5' : 'rounded-md rounded-tr-none px-1.5 py-0.5'}`}
            style={{ background: color, minWidth: size === 'medium' ? 40 : 18 }}
          >
            <div className={`${size === 'medium' ? 'h-1.5 w-7' : 'h-0.5 w-3'} rounded-full bg-white/80`} />
          </div>
        </div>
      )}
      {bubbles >= 3 && (
        <div className="flex justify-start items-end gap-1">
          {size === 'medium' && (
            <div className="w-3 h-3 rounded-full shrink-0" style={{ background: `${color}80` }} />
          )}
          <div
            className="rounded-xl rounded-bl-sm px-2.5 py-1.5"
            style={{ background: `${color}33`, minWidth: 36 }}
          >
            <div className="flex gap-0.5">
              <div className="w-1 h-1 rounded-full" style={{ background: color }} />
              <div className="w-1 h-1 rounded-full" style={{ background: color, opacity: 0.6 }} />
              <div className="w-1 h-1 rounded-full" style={{ background: color, opacity: 0.3 }} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
