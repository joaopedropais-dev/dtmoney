import { Container } from "./styles";
import { CurrencyFormatter } from "../../utils/currency-formatter";
import moment from "moment";
import { useTransations } from "../../hooks/useTransactions";

export function TransactionsTable() {
  const { transactions } = useTransations();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {CurrencyFormatter.format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {moment(transaction.createdAt).format(
                  " DD [de] MMMM [de] YYYY [às] h:mm A"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
