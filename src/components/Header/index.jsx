import { StyledResponsiveDivHeader } from '../../styles/grid'
import { StyledHeader } from './style'

export const HeaderDefault = () => {
  return (
    <StyledHeader>
      <StyledResponsiveDivHeader>
        <figure>
          <img src='./src/assets/Nu-Kenzie-logo.svg' alt='Logo da Nu Kenzie' />
        </figure>
      </StyledResponsiveDivHeader>
    </StyledHeader>
  )
}
