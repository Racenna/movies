import { NavLink } from 'react-router-dom';

type Props = {
  id: number,
  item_count: number,
  name: string,
  lastListElementRef?: (node: HTMLDivElement) => void,
};

const CustomListsItem = ({
  item_count,
  name,
  id,
  lastListElementRef,
}: Props) => {
  return (
    <NavLink to={`/list/${id}`} style={{ color: '#ffffff' }}>
      <div className="list" ref={lastListElementRef}>
        <span className="list-name">{name}</span>
        <span className="list-items-count">items: {item_count}</span>
      </div>
    </NavLink>
  );
};

export default CustomListsItem;
