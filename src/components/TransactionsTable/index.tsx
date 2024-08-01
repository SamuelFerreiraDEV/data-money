import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";
import closeImg from "../../assets/close.svg";

interface TransactionsTableProps {
  onOpenDeleteTransactionModal: () => void;
}

export function TransactionsTable({ onOpenDeleteTransactionModal }: TransactionsTableProps) {

  const { transactions } = useTransactions();
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
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
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </td>
              <td>
                <button type="button">
                  <img src={closeImg} alt="Deletar transação" />
                </button>
                <button type="button">
                  <img src={closeImg} alt="Editar transação" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}