import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { CustomList } from '../../../../../../../api/accountAPI/types';
import ModalList from './ModalList';

type Props = {
  customLists: Array<CustomList>,
  handleAddToList: (id: number | string) => void,
};

const ListButton = ({ customLists, handleAddToList }: Props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <FontAwesomeIcon
        className="list-button"
        icon={['fas', 'list']}
        onClick={() => setIsActive(true)}
      />
      <ModalList
        customLists={customLists}
        isActive={isActive}
        closeModal={() => setIsActive(false)}
        handleAddToList={(id: number | string) => {
          setIsActive(false);
          handleAddToList(id);
        }}
      />
    </>
  );
};

export default ListButton;
