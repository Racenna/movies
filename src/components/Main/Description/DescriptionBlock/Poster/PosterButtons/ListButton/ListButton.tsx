import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import ModalList from './ModalList';

const ListButton = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <FontAwesomeIcon
        className="list-button"
        icon={['fas', 'list']}
        onClick={() => setIsActive(true)}
      />
      <ModalList isActive={isActive} closeModal={() => setIsActive(false)} />
    </>
  );
};

export default ListButton;
