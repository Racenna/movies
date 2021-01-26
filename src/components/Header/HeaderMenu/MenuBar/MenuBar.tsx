import Navigation from '../../../../common/Navigation';

type MenuBarType = {
  style: string,
  activeChange: (value: boolean) => void,
};

const MenuBar = ({ style, activeChange }: MenuBarType) => {
  return (
    <>
      <nav className={`menu ${style}`}>
        <Navigation />
      </nav>
      <div
        className={`menu-shadow ${style}`}
        onClick={() => {
          activeChange(false);
        }}
      ></div>
    </>
  );
};

export default MenuBar;
