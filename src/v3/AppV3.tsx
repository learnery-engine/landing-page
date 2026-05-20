import { PersonaProvider, type Persona } from './PersonaContext'
import { NavV3 } from './components/NavV3'
import { HeroV3 } from './components/HeroV3'
import { SurfaceCanvas } from './components/SurfaceCanvas'
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
import { useDocumentMeta } from './useDocumentMeta'

/**
 * V3 landing — persona-first, surface-aware.
 *
 * Composition order tells a story:
 *   Hero       → "Who are you?" (picks persona)
 *   Surfaces   → "Here are all 5 product surfaces, your engagement highlighted"
 *   Proof      → "Each surface has real evidence, not mockups"
 *   Trust      → "Certified, measured, deployed"
 *   Programs   → "If you're ready, here are turnkey programs"
 *   CTA        → Closes with persona-specific verb
 *
 * Footer is reused from the V2 system — same legal/company info applies.
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
        <SurfaceCanvas />
        <TryItNow />
        <LiveProof />
        <TestimonialsV3 />
        <HubPreview />
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
