import { RecommendationsAndSimilarResult } from '../../../../api/movieAPI/types';
import Recommended from './Recommended';
import Similar from './Similar';

type Props = {
  recommended: Array<RecommendationsAndSimilarResult>,
  similar: Array<RecommendationsAndSimilarResult>,
};

const RecommendedAndSimilar = ({ recommended, similar }: Props) => {
  return (
    <div className="recommended-and-similar">
      <Recommended recommended={recommended} />
      <Similar similar={similar} />
    </div>
  );
};

export default RecommendedAndSimilar;
