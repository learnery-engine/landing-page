import { PersonaProvider, type Persona } from './PersonaContext'
import { NavV3 } from './components/NavV3'
import { HeroV3 } from './components/HeroV3'
import { SurfaceCanvas } from './components/SurfaceCanvas'
import { ToolGrid } from './components/ToolGrid'
import { LiveProof } from './components/LiveProof'
import { TryItNow } from './components/TryItNow'
import { HubPreview } from './components/HubPreview'
import { TestimonialsV3 } from './components/TestimonialsV3'
import { TrustStrip } from './components/TrustStrip'
import { ProgramsV3 } from './components/ProgramsV3'
import { FaqV3 } from './components/FaqV3'
import { FounderNote } from './components/FounderNote'
import { CtaV3 } from './components/CtaV3'
import { Footer } from '../components/Footer'
import { SectionDivider } from '../components/v2/SectionDivider'
import { useDocumentMeta } from './useDocumentMeta'

/**
 * V3 landing — persona-first, surface-aware.
 *
 * Composition order tells a story:
 *   Hero       → "Who are you?" (picker + animated product mockup)
 *   Surfaces   → 5 surfaces with persona-engagement intensity
 *   Tools      → All 13+ Mini Apps in a single comprehensive grid
 *                (mirrors V2's flagship Platform tool grid)
 *   TryItNow   → Inline interactive demos (COMPASS / Mini App / Lumi)
 *   LiveProof  → Student-built-apps hero + COMPASS + Lumi proof
 *   Testimonials → Persona-aware voices
 *   HubPreview → "Sign in to land here" mockup of the actual /v3 hub
 *   Trust      → Numbers + accreditation chips
 *   Programs   → K-12 + University turnkey programs
 *   FAQ        → Objection-handling
 *   Founder    → Team note + support email
 *   CTA        → Persona-specific verb close
 *
 * Wave `SectionDivider` SVGs separate major beats — same treatment as V2's
 * AppV2 composition. Footer reused from the V2 system.
 */
export function AppV3({ initialPersona = null }: { initialPersona?: Persona | null } = {}) {
  return (
    <PersonaProvider initialPersona={initialPersona}>
      <AppV3Inner />
    </PersonaProvider>
  )
}

/**
 * Wrapped in its own component so `useDocumentMeta` can subscribe to the
 * persona context — `useDocumentMeta` reads via `usePersona()` and a
 * provider has to be in scope before the hook can fire.
 */
function AppV3Inner() {
  useDocumentMeta()
  return (
    <div className="min-h-screen bg-white">
      <NavV3 />
      <main>
        <HeroV3 />
        <SectionDivider color="#fafafa" />
        <SurfaceCanvas />
        <SectionDivider color="white" flip />
        <ToolGrid />
        <SectionDivider color="#0F0E17" />
        <LiveProof />
        <SectionDivider color="white" flip />
        <TryItNow />
        <TestimonialsV3 />
        <HubPreview />
        <SectionDivider color="#fafafa" />
        <TrustStrip />
        <ProgramsV3 />
        <FaqV3 />
        <FounderNote />
        <CtaV3 />
      </main>
      <Footer />
    </div>
  )
}
