type Prop = {
  name: string,
};

const Genre = ({ name }: Prop) => {
  return <div className="genres-item">{name}</div>;
};

export default Genre;
