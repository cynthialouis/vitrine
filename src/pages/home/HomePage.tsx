import { profile } from '../../content/profile'
import { EducationSection } from './EducationSection'
import { ExperiencesSection } from './ExperiencesSection'
import { HeroSection } from './HeroSection'

export function HomePage() {
  return (
    <>
      <title>{`${profile.name} · ${profile.role}`}</title>
      <meta name="description" content={profile.pitch} />
      <HeroSection />
      <ExperiencesSection />
      <EducationSection />
    </>
  )
}
