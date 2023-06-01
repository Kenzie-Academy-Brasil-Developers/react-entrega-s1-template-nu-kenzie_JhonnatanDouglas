import { PrimaryButton } from '../../styles/buttons'
import { Input } from '../../styles/inputs'
import { Select } from '../../styles/selects'
import { Label, Paragraph } from '../../styles/typography'
import { Form } from './styles'

export const InsertCard = () => {
  return (
    <Form>
      <Label>Descrição</Label>
      <div>
        <Input type='text' placeholder='Digite aqui sua descrição' required />
        <Paragraph>Ex: Compra de Roupas</Paragraph>
      </div>
      <div>
        <Label>Valor (R$)</Label>
        <Input type='number' placeholder='1' required />
      </div>
      <div>
        <Label>Tipo de Valor</Label>
        <Select required>
          <option value='' hidden>
            Selecionar uma opção
          </option>
          <option value='Entrada'>Entrada</option>
          <option value='Despesa'>Despesa</option>
        </Select>
      </div>
      <PrimaryButton>Inserir valor</PrimaryButton>
    </Form>
  )
}
