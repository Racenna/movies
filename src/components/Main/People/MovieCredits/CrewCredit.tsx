import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';
import { Crew } from '../../../../api/peopleAPI/types';

type Props = {
  crewCredits: Array<Crew>,
};

const CrewCredit = ({ crewCredits }: Props) => {
  return (
    <div className="department-wrapper">
      {crewCredits.map((item) => {
        const poster = item.poster_path ? (
          <LazyLoadImage
            src={`${process.env.REACT_APP_IMG_BASE_URL}${item.poster_path}`}
          />
        ) : (
          <div className="empty-poster">No Image</div>
        );
        return (
          <div className="item" key={item.id}>
            <NavLink to={`/movie/description/${item.id}`}>{poster}</NavLink>
            <NavLink
              className="item-title"
              to={`/movie/description/${item.id}`}
            >
              {item.title}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default CrewCredit;
