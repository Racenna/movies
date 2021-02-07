import React, { useState } from 'react';
import MenuButton from './MenuButton/MenuButton';
import MenuBar from './MenuBar/MenuBar';

const HeaderMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const clickHandler = (status: boolean): void => {
    setIsActive(status);
  };

  const style = isActive ? 'active' : 'inactive';

  return (
    <>
      <MenuButton
        style={style}
        activeChange={clickHandler}
        isActive={isActive}
      />
      <MenuBar style={style} activeChange={clickHandler} />
    </>
  );
};

export default HeaderMenu;
