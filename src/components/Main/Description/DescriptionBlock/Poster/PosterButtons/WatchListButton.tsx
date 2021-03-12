import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  isWatchList: boolean,
  handleWatchList: (isWatchList: boolean) => void,
};

const WatchListButton = ({ isWatchList, handleWatchList }: Props) => {
  return (
    <FontAwesomeIcon
      className={`watch-list-button ${isWatchList ? 'active' : ''}`}
      icon={['fas', 'bookmark']}
      onClick={() => handleWatchList(!isWatchList)}
    />
  );
};

export default WatchListButton;
