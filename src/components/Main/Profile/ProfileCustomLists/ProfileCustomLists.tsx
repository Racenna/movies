import { CustomList } from '../../../../api/accountAPI/types';
import Preloader from '../../../../common/Preloader';
import CustomListsItem from './CustomListsItem';

type Props = {
  customLists: Array<CustomList>,
  isLoading: boolean,
  lastListElementRef: (node: HTMLDivElement) => void,
  handleClearList: (list_id: number, name: string) => void,
  handleDeleteList: (list_id: number, name: string) => void,
};

const ProfileCustomLists = ({
  customLists,
  isLoading,
  lastListElementRef,
  handleClearList,
  handleDeleteList,
}: Props) => {
  return (
    <div className="profile-custom-lists">
      {customLists.map((item, index) => {
        if (customLists.length === index + 1) {
          return (
            <CustomListsItem
              key={item.id}
              id={item.id}
              item_count={item.item_count}
              name={item.name}
              lastListElementRef={lastListElementRef}
              handleClearList={handleClearList}
              handleDeleteList={handleDeleteList}
            />
          );
        } else {
          return (
            <CustomListsItem
              key={item.id}
              id={item.id}
              item_count={item.item_count}
              name={item.name}
              handleClearList={handleClearList}
              handleDeleteList={handleDeleteList}
            />
          );
        }
      })}
      {isLoading && <Preloader />}
    </div>
  );
};

export default ProfileCustomLists;
