type MenuButtonPropsType = {
  isActive: boolean,
  activeChange: (value: boolean) => void,
};

const MenuButton = ({ activeChange, isActive }: MenuButtonPropsType) => {
  return (
    <div className="menu-box">
      <div
        className={`menu-box-button ${isActive ? 'active' : 'inactive'}`}
        onClick={() => activeChange(!isActive)}
      >
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </div>
  );
};

export default MenuButton;
