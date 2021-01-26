import '../Main.scss';

type ItemInterface = {
  key: string,
  title: string,
  genres: string,
};

const Item = (props: ItemInterface) => {
  return (
    <div key={props.key} className="main-content-item">
      <div className="item-image"></div>
      <div className="item-description">
        <div className="item-description-title">{props.title}</div>
        <div className="item-description-genre">{props.genres}</div>
      </div>
    </div>
  );
};

const Recommended = () => {
  const arrayItems = [
    { id: '1', title: 'Boo 1', genres: 'Horror, Comedy' },
    { id: '2', title: 'Boo 2', genres: 'Horror, Comedy' },
    { id: '3', title: 'Boo 3', genres: 'Horror, Comedy' },
    { id: '4', title: 'Boo 4', genres: 'Horror, Comedy' },
    { id: '5', title: 'Boo 5', genres: 'Horror, Comedy' },
    { id: '6', title: 'Boo 6', genres: 'Horror, Comedy' },
    { id: '7', title: 'Boo 7', genres: 'Horror, Comedy' },
    { id: '8', title: 'Boo 8', genres: 'Horror, Comedy' },
    { id: '9', title: 'Boo 9', genres: 'Horror, Comedy' },
    { id: '10', title: 'Boo 10', genres: 'Horror, Comedy' },
    { id: '11', title: 'Boo 11', genres: 'Horror, Comedy' },
    { id: '12', title: 'Boo 12', genres: 'Horror, Comedy' },
    { id: '13', title: 'Boo 13', genres: 'Horror, Comedy' },
    // { id: '14', title: 'Boo 14', genres: 'Horror, Comedy' },
  ];

  return (
    <div className="main">
      <div className="main-title">Recommended</div>
      <div className="main-content">
        {arrayItems.map((value) => (
          <Item key={value.id} title={value.title} genres={value.genres} />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
