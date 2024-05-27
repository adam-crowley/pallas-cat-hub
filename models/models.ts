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
  countryUrl: string
  countryId: number
  cats: []
}
export interface CatData {
  name: string
  id: number
  country: string
  countryUrl: string
  imageUrl: string
}

export interface FilterProps {
  countryData: CountryData[]
  selectedCountry: string | null
  setSelectedCountry: (country: string | null) => void
}

export interface ManulCardProps {
  cat: CatData
}
