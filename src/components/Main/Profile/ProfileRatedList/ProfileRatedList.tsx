import { Movie } from '../../../../api/accountAPI/types';
import Preloader from '../../../../common/Preloader';
import RatedListItem from './RatedListItem';

type Props = {
  ratedList: Array<Movie>,
  isLoading: boolean,
  lastListElementRef?: (node: HTMLDivElement) => void,
  handleRateItem: (value: number, id: number) => void,
  handleDeleteRatingItem: (id: number, name: string) => void,
};

const ProfileRatedList = ({
  ratedList,
  isLoading,
  lastListElementRef,
  handleRateItem,
  handleDeleteRatingItem,
}: Props) => {
  return (
    <div className="profile-list-items">
      {ratedList.map((item, index) => {
        if (ratedList.length === index + 1 && item.rating) {
          return (
            <RatedListItem
              key={item.id}
              id={item.id}
              title={item.title}
              poster_path={item.poster_path}
              release_date={item.release_date}
              rating={item.rating}
              lastListElementRef={lastListElementRef}
              handleRateItem={handleRateItem}
              handleDeleteRatingItem={handleDeleteRatingItem}
            />
          );
        } else if (item.rating) {
          return (
            <RatedListItem
              key={item.id}
              id={item.id}
              title={item.title}
              poster_path={item.poster_path}
              release_date={item.release_date}
              rating={item.rating}
              handleRateItem={handleRateItem}
              handleDeleteRatingItem={handleDeleteRatingItem}
            />
          );
        }
      })}
      {isLoading && <Preloader />}
    </div>
  );
};

export default ProfileRatedList;
