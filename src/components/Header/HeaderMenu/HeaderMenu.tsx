import { useState } from 'react';
import MenuButton from './MenuButton/MenuButton';
import MenuBar from './MenuBar/MenuBar';

const HeaderMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const clickHandler = (status: boolean): void => {
    setIsActive(status);
  };

  // const style = isActive ? 'active' : 'inactive';

  return (
    <>
      <MenuButton activeChange={clickHandler} isActive={isActive} />
      <MenuBar isActive={isActive} activeChange={clickHandler} />
    </>
  );
};

export default HeaderMenu;
