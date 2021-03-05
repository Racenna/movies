type Props = {
  isActive: boolean,
  closeModal: () => void,
};

const ModalList = ({ isActive, closeModal }: Props) => {
  return (
    <div
      className={`modal-window ${isActive ? 'active' : ''}`}
      onClick={closeModal}
    >
      <div onClick={(event) => event.stopPropagation()}>TODO lists</div>
    </div>
  );
};

export default ModalList;
