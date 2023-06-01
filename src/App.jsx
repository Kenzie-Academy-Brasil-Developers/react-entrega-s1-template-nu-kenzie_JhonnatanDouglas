import { InsertCard } from './components/Form'
import { StyledHeader } from './components/Header'
import { SumaryArea } from './components/SummaryArea'
import { TotalValue } from './components/TotalValue'
import { GlobalStyles } from './styles/globalStyles'
import { DivMainContainer } from './styles/grid'
import { ResetCss } from './styles/reset'

function App() {
  return (
    <>
      <ResetCss />
      <GlobalStyles />

      <StyledHeader />
      <main>
        <DivMainContainer>
          <div>
            <InsertCard />
            <TotalValue />
          </div>
          <div>
            <SumaryArea />
          </div>
        </DivMainContainer>
      </main>
    </>
  )
}

export default App
