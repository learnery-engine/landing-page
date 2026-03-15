import './index.css'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Partners } from './components/Partners'
import { Platform } from './components/v2/Platform'
import { PlatformFlow } from './components/v2/PlatformFlow'
import { Testimonials } from './components/Testimonials'
import { Stats } from './components/Stats'
import { ProgramsV2 } from './components/v2/ProgramsV2'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function AppV2() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Partners />
      <Platform />
      <PlatformFlow />
      <ProgramsV2 />
      <Testimonials />
      <Stats />
      <CTA />
      <Footer />
    </div>
  )
}
