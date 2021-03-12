import { CustomList } from '../../../../../../../api/accountAPI/types';

type Props = {
  isActive: boolean,
  customLists: Array<CustomList>,
  closeModal: () => void,
  handleAddToList: (id: number | string, name: string) => void,
};

const ModalList = ({
  isActive,
  customLists,
  closeModal,
  handleAddToList,
}: Props) => {
  return (
    <div
      className={`modal-window ${isActive ? 'active' : ''}`}
      onClick={closeModal}
    >
      <div
        className="lists-wrapper"
        onClick={(event) => event.stopPropagation()}
      >
        <span className="lists-title">Your lists</span>
        {customLists.map((item) => (
          <div className="list" key={item.id}>
            <div>
              <span className="list-name">{item.name}</span>
              <span className="list-items-count">items: {item.item_count}</span>
            </div>
            <button onClick={() => handleAddToList(item.id, item.name)}>
              Add to list
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalList;
