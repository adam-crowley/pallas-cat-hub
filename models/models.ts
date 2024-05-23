export interface HeaderProps {
  scrollToSection: (sectionRef: React.RefObject<HTMLElement>) => void
  refs: {
    introRef: React.RefObject<HTMLElement>
    factsRef: React.RefObject<HTMLElement>
    habitatRef: React.RefObject<HTMLElement>
    videosRef: React.RefObject<HTMLElement>
  }
}

export type RefsType = HeaderProps['refs']

export interface SlideData {
  imageUrl: string
  title: string
  text: string
}

export interface VideoSlideData {
  imageUrl: string
  youTubeId: string
  title: string
  author: string
  text: string
}

export interface CountryData {
  country: string
  cats: []
}
export interface CatData {
  name: string
  country: string
  countryUrl: string
  imageUrl: string
}
