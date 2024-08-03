import { useState } from "react";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";
import { DeleteTransactionModal } from "../DeleteTransactionModal";

export function Dashboard() {
  
  const [isDeleteTransactionModalOpen, setIsDeleteTransactionModalOpen] = useState(false);
  const [deleteTransactionId, setDeleteTransactionId] = useState(0);

  function handleOpenDeleteTransactionModal(id: number) {
    setIsDeleteTransactionModalOpen(true);     
    setDeleteTransactionId(id);
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
        transactionId={deleteTransactionId}
      />
    </Container>
  );
}