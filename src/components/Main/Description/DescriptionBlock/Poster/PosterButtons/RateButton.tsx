import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  rating: number,
  handleActive: (activeState: boolean) => void,
};

const RateButton = ({ rating, handleActive }: Props) => {
  return (
    <FontAwesomeIcon
      className={`rate-button ${rating > 0 ? 'active' : ''}`}
      icon={['fas', 'star']}
      onClick={() => handleActive(true)}
    />
  );
};

export default RateButton;
