import { CustomList } from '../../../../api/accountAPI/types';
import Preloader from '../../../../common/Preloader';
import CustomListsItem from './CustomListsItem';

type Props = {
  customLists: Array<CustomList>,
  isLoading: boolean,
  lastListElementRef: (node: HTMLDivElement) => void,
};

const ProfileCustomLists = ({
  customLists,
  isLoading,
  lastListElementRef,
}: Props) => {
  return (
    <div className="profile-custom-lists">
      {customLists.map((item, index) => {
        if (customLists.length === index + 1) {
          return (
            <CustomListsItem
              key={item.id}
              id={item.id}
              description={item.description}
              item_count={item.item_count}
              name={item.name}
              lastListElementRef={lastListElementRef}
            />
          );
        } else {
          return (
            <CustomListsItem
              key={item.id}
              id={item.id}
              description={item.description}
              item_count={item.item_count}
              name={item.name}
            />
          );
        }
      })}
      {isLoading && <Preloader />}
    </div>
  );
};

export default ProfileCustomLists;
