type MenuButtonPropsType = {
  style: string,
  activeChange: (value: boolean) => void,
  isActive: boolean,
};

const MenuButton = ({ style, activeChange, isActive }: MenuButtonPropsType) => {
  return (
    <div className="menu-box">
      <div
        className={`menu-box-button ${style}`}
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
