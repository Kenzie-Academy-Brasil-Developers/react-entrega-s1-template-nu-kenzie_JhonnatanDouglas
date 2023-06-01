import { Paragraph, TittleH3 } from '../../styles/typography'
import { DivValueArea } from './style'

export const TotalValue = () => {
  return (
    <DivValueArea>
      <div>
        <TittleH3>Valor Total</TittleH3>
        <Paragraph>O valor se refere ao saldo</Paragraph>
      </div>
      <TittleH3>R$ 8184,00</TittleH3>
    </DivValueArea>
  )
}
