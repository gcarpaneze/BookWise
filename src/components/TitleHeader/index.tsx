import { HeaderContainer } from './styles'
import { ReactNode } from 'react'

interface HeaderProps {
  description: string
  children: ReactNode
}

export default function TitleHeader({ description, children }: HeaderProps) {
  return (
    <HeaderContainer>
      {children}
      <span>{description}</span>
    </HeaderContainer>
  )
}
