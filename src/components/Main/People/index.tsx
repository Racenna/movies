import { useParams } from 'react-router';
import Preloader from '../../../common/Preloader';
import usePeopleDetails from '../../../hooks/usePeopleDetails';
import MovieCredits from './MovieCredits/MovieCredits';
import PeopleDetail from './PeopleDetail';
import './People.scss';

type Params = {
  people_id: string,
};

const People = () => {
  const { people_id } = useParams<Params>();

  const {
    isLoading,
    detail,
    error,
    errorMessage,
    cast,
    crew,
  } = usePeopleDetails(+people_id);

  if (isLoading) return <Preloader />;

  return (
    <div className="people">
      {error && <div className="not-found">{errorMessage}</div>}
      {detail && (
        <PeopleDetail
          name={detail.name}
          profile_path={detail.profile_path}
          department={detail.known_for_department}
          also_known_as={detail.also_known_as}
          birthday={detail.birthday}
          deathday={detail.deathday}
          place_of_birth={detail.place_of_birth}
          biography={detail.biography}
        />
      )}
      <MovieCredits cast={cast} crew={crew} />
    </div>
  );
};

export default People;
