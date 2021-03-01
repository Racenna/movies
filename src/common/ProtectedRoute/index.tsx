import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { SessionContext } from '../../contexts/SessionContext';

type Props = {
  component: React.FC,
  path: string,
  exact: boolean,
};

const ProtectedRoute = ({ component, path, exact }: Props) => {
  const session_id = !!useContext(SessionContext).session_id;

  return session_id ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/trending" />
  );
};

export default ProtectedRoute;
