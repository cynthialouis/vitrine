import { home } from '../../content/home'
import { profile } from '../../content/profile'
import { toPlainText } from '../../lib/accented-text'
import { EducationSection } from './EducationSection'
import { ExperiencesSection } from './ExperiencesSection'
import { HeroSection } from './HeroSection'

export function HomePage() {
  return (
    <>
      <title>{`${profile.name} · ${toPlainText(profile.role)}`}</title>
      <meta name="description" content={toPlainText(home.hero.description)} />
      <HeroSection />
      <ExperiencesSection />
      <EducationSection />
    </>
  )
}
