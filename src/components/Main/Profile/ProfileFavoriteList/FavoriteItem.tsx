type Props = {
  title: string,
  lastListElementRef?: (node: HTMLDivElement) => void,
};

const FavoriteItem = ({ title, lastListElementRef }: Props) => {
  return <div ref={lastListElementRef}>{title}</div>;
};

export default FavoriteItem;
