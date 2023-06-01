import { TittleH3 } from '../../styles/typography'
import { SalaryList } from '../SalaryList'
import { EmptyList } from '../SalaryListEmpty'
import { StyledUl } from './style'

export const SumaryArea = () => {
  return (
    <>
      <TittleH3>Resumo financeiro</TittleH3>
      <EmptyList />
      <StyledUl>
        <SalaryList
          descriptionValue='Sálario de Dezembro'
          totalValue='R$ 6.500,00'
          selectedValue='Entrada'
        />
        <SalaryList
          descriptionValue='Sálario de Outubro'
          totalValue='R$ 8.000,00'
          selectedValue='Entrada'
        />
        <SalaryList
          descriptionValue='Sálario de Janeiro'
          totalValue='R$ 1.500,00'
          selectedValue='Entrada'
        />
        <SalaryList
          descriptionValue='Sálario de Agosto'
          totalValue='R$ 2.000,00'
          selectedValue='Saída'
        />
      </StyledUl>
    </>
  )
}
