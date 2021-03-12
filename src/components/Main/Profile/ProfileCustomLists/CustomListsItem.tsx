type Props = {
  id: number,
  description: string,
  item_count: number,
  name: string,
  lastListElementRef?: (node: HTMLDivElement) => void,
};

const CustomListsItem = ({ item_count, name, lastListElementRef }: Props) => {
  return (
    <div className="list" ref={lastListElementRef}>
      <span className="list-name">{name}</span>
      <span className="list-items-count">items: {item_count}</span>
    </div>
  );
};

export default CustomListsItem;
