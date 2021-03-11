import Navigation from '../../../../common/Navigation';

type MenuBarType = {
  isActive: boolean,
  activeChange: (value: boolean) => void,
};

const MenuBar = ({ isActive, activeChange }: MenuBarType) => {
  return (
    <>
      <nav className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <Navigation />
      </nav>
      <div
        className={`menu-shadow ${isActive ? 'active' : 'inactive'}`}
        onClick={() => {
          activeChange(false);
        }}
      ></div>
    </>
  );
};

export default MenuBar;
