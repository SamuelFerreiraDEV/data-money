import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { OptionButton } from './styles';


interface DeleteTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void,
}

export function DeleteTransactionModal({ isOpen, onRequestClose }: DeleteTransactionModalProps) {


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

      <OptionButton
        bgColor='green'
      >
        <span>Confirmar</span>
      </OptionButton>

      <OptionButton
        bgColor='red'
      >
        <span>Cancelar</span>
      </OptionButton>
    </Modal>
  )
}