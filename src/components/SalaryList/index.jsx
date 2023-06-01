import { DeleteButton } from '../../styles/buttons'
import { Paragraph, TittleH3 } from '../../styles/typography'
import { SalaryCard } from './style'

export const SalaryList = ({ descriptionValue, selectedValue, totalValue }) => {
  return (
      <SalaryCard borderColor={selectedValue}>
        <div>
          <TittleH3>{descriptionValue}</TittleH3>
          <Paragraph>{selectedValue}</Paragraph>
        </div>
        <div>
          <Paragraph>{totalValue}</Paragraph>
          <DeleteButton>Excluir</DeleteButton>
        </div>
      </SalaryCard>
  )
}
