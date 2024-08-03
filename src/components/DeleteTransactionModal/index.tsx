import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Container, OptionButton } from './styles';
import { useTransactions } from '../../hooks/useTransactions';

interface DeleteTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void,
  transactionId: number,
}

export function DeleteTransactionModal({ 
  isOpen, 
  onRequestClose, 
  transactionId
 }: DeleteTransactionModalProps) {

  const { deleteTransaction } = useTransactions();

  async function handleDeleteTransaction() {
    await deleteTransaction(transactionId);
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeImg} alt='fechar modal' />
      </button>

      <Container>
        <span>Deseja deletar esta entrada?</span>
        <div>
          <OptionButton
            bgColor='green'
            onClick={() => handleDeleteTransaction()}
          >
            <span>Confirmar</span>
          </OptionButton>
          <OptionButton
            bgColor='red'
            onClick={onRequestClose}
          >
            <span>Cancelar</span>
          </OptionButton>
        </div>
      </Container>
    </Modal>
  )
}