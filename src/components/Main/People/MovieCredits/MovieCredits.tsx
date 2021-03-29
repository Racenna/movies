import { Cast, Crew } from '../../../../api/peopleAPI/types';
import CastCredit from './CastCredit';
import CrewCredit from './CrewCredit';

type Props = {
  cast: Array<Cast>,
  crew: Array<Crew>,
};

type Department = {
  department: string,
  items: Array<Crew>,
};

const MovieCredits = ({ cast, crew }: Props) => {
  const sortedCastMovie = [...cast].sort((a, b) => b.popularity - a.popularity);
  const sortedCrewMovie = [...crew].sort((a, b) => b.popularity - a.popularity);

  const departments: Array<Department> = [];

  const set = new Set<string>();
  sortedCrewMovie.forEach((item) => {
    set.add(item.department);
  });

  set.forEach((key) => {
    departments.push({ department: key, items: [] });
  });

  departments.forEach((item) => {
    const duplicate = new Set<number>();
    for (let i = 0; i < sortedCrewMovie.length; i++) {
      if (
        item.department === sortedCrewMovie[i].department &&
        !duplicate.has(sortedCrewMovie[i].id)
      ) {
        duplicate.add(sortedCrewMovie[i].id);
        item.items.push(sortedCrewMovie[i]);
      }
    }
  });

  return (
    <div className="movie-credits">
      {!!sortedCastMovie.length && (
        <div className="cast-credit">
          <span>Cast</span>
          <div className="cast-credit-items">
            {sortedCastMovie.map((item) => (
              <CastCredit
                key={item.id}
                id={item.id}
                poster_path={item.poster_path}
                title={item.title}
              />
            ))}
          </div>
        </div>
      )}
      {!!sortedCrewMovie.length && (
        <div className="crew-credit">
          {departments.map((item) => (
            <div className="crew-credit-department" key={item.department}>
              <span>{item.department}</span>
              <CrewCredit crewCredits={item.items} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieCredits;
