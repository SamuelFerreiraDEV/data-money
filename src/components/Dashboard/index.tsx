import { useState } from "react";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";
import { log } from "console";
import { DeleteTransactionModal } from "../DeleteTransactionModal";

export function Dashboard() {
  
  const [isDeleteTransactionModalOpen, setIsDeleteTransactionModalOpen] = useState(false);

  function handleOpenDeleteTransactionModal() {
    setIsDeleteTransactionModalOpen(true);     
  }
  
  function handleCloseDeleteTransactionModal() {
    setIsDeleteTransactionModalOpen(false); 
  }

  return (
    <Container>
      <Summary />
      <TransactionsTable onOpenDeleteTransactionModal={handleOpenDeleteTransactionModal}/>
      <DeleteTransactionModal
        isOpen={isDeleteTransactionModalOpen}
        onRequestClose={handleCloseDeleteTransactionModal}
      />
    </Container>
  );
}