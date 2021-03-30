import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  isActive: boolean,
  activeChange: (value: boolean) => void,
};

const MenuButton = ({ activeChange, isActive }: Props) => {
  return (
    <div className="menu-box">
      <FontAwesomeIcon
        onClick={() => activeChange(!isActive)}
        icon={['fas', 'bars']}
      />
    </div>
  );
};

export default MenuButton;
