import { Backpack, GraduationCap, Home, Briefcase, Building2 } from 'lucide-react'
import type { Persona } from '../PersonaContext'

const MAP = {
  hs: Backpack,
  gv: GraduationCap,
  ph: Home,
  pro: Briefcase,
  b2b: Building2,
} as const satisfies Record<Persona, React.ComponentType<{ className?: string }>>

/**
 * Single source of truth for persona iconography. Lucide icons chosen for
 * semantic clarity at a glance — backpack=student, cap=teacher, home=parent,
 * briefcase=working pro, building=school/org.
 */
export function PersonaIcon({ persona, className }: { persona: Persona; className?: string }) {
  const Icon = MAP[persona]
  return <Icon className={className} aria-hidden />
}
