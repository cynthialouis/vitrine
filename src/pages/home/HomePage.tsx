import { profile } from '../../content/profile'
import { ContactCtaSection } from './ContactCtaSection'
import { EducationSection } from './EducationSection'
import { ExperiencesSection } from './ExperiencesSection'
import { HeroSection } from './HeroSection'

export function HomePage() {
  return (
    <>
      <title>{`${profile.name} · ${profile.role}`}</title>
      <meta
        name="description"
        content="Je conçois des interfaces web soignées et faciles à maintenir."
      />
      <HeroSection />
      <ExperiencesSection />
      <EducationSection />
      <ContactCtaSection />
    </>
  )
}
