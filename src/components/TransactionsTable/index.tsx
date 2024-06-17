import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import { CurrencyFormatter } from "../../utils/currency-formatter";
import moment from "moment";

interface transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

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
