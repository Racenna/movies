import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

type Props = {
  id: number,
  item_count: number,
  name: string,
  lastListElementRef?: (node: HTMLDivElement) => void,
  handleClearList: (list_id: number, name: string) => void,
  handleDeleteList: (list_id: number, name: string) => void,
};

const CustomListsItem = ({
  item_count,
  name,
  id,
  lastListElementRef,
  handleClearList,
  handleDeleteList,
}: Props) => {
  return (
    <div className="list">
      <NavLink to={`/list/${id}`} style={{ color: '#ffffff', width: '100%' }}>
        <div ref={lastListElementRef}>
          <span className="list-name">{name}</span>
          <span className="list-items-count">items: {item_count}</span>
        </div>
      </NavLink>
      <div className="clear" onClick={() => handleClearList(id, name)}>
        <FontAwesomeIcon icon={['fas', 'eraser']} />
      </div>
      <div className="delete" onClick={() => handleDeleteList(id, name)}>
        <FontAwesomeIcon icon={['fas', 'trash-alt']} />
      </div>
    </div>
  );
};

export default CustomListsItem;
