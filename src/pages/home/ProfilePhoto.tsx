import type { Photo } from '../../content/profile'

type ProfilePhotoProps = {
  name: string
  photo?: Photo
}

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
}

const frameClassName =
  'aspect-4/5 w-full overflow-hidden rounded-3xl shadow-xl ring-1 shadow-ink/10 ring-ink/5'

export function ProfilePhoto({ name, photo }: ProfilePhotoProps) {
  if (photo) {
    return (
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        fetchPriority="high"
        className={`${frameClassName} object-cover`}
      />
    )
  }

  return (
    <div
      aria-hidden="true"
      className={`${frameClassName} flex items-center justify-center bg-linear-to-br from-highlight to-paper`}
    >
      <span className="font-serif text-9xl text-ink/80">{getInitials(name)}</span>
    </div>
  )
}
