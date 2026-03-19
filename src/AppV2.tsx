import './index.css'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Partners } from './components/Partners'
import { Platform } from './components/v2/Platform'
import { PlatformFlow } from './components/v2/PlatformFlow'
import { SectionDivider } from './components/v2/SectionDivider'
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
      <SectionDivider color="white" />
      <Platform />
      <SectionDivider color="#f8fafc" />
      <PlatformFlow />
      <SectionDivider color="white" flip />
      <Testimonials />
      <Stats />
      <ProgramsV2 />
      <CTA />
      <Footer />
    </div>
  )
}
