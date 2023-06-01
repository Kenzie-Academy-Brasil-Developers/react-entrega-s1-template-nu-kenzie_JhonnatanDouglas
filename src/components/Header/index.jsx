import { DivHeaderContainer } from '../../styles/grid'
import { Header } from './style'

export const StyledHeader = () => {
  return (
    <Header>
      <DivHeaderContainer>
        <figure>
          <img src='./src/assets/Nu-Kenzie-logo.svg' alt='Logo da Nu Kenzie' />
        </figure>
      </DivHeaderContainer>
    </Header>
  )
}
