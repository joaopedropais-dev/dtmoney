import totalImag from '../../assets/money.svg'
import spendingImg from '../../assets/seta-baixo.svg'
import  incomeImg from '../../assets/seta-cima.svg' 

import { Container } from './styles'

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>entradas</p>
          <img src={incomeImg} alt="Entradas" />            
        </header>
        <strong>R$5.000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={spendingImg} alt="Saídas" />            
        </header>
        <strong>- R$800,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImag} alt="Total" />            
        </header>
        <strong>R$4.200,00</strong>
      </div>
    </Container>
  )
}