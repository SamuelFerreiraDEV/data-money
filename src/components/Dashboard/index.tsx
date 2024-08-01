import { useState } from "react";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
  
  const [isDeleteTransactionModalOpen, setIsDeleteTransactionModalOpen] = useState(false);

  function handleOpenDeleteTransactionModal() {
    setIsDeleteTransactionModalOpen(true); 
  }
  
  function handleCloseNewTransactionModal() {
    setIsDeleteTransactionModalOpen(false); 
  }


  return (
    <Container>
      <Summary />
      <TransactionsTable onOpenDeleteTransactionModal={handleOpenDeleteTransactionModal}/>
    </Container>
  );
}