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
