import { useContext, useEffect, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { authenticationAPI } from '../../../api/authenticationAPI/authenticationAPI';
import { SessionContext } from '../../../contexts/SessionContext';

const Approve = () => {
  const [isApproved, setIsApproved] = useState(false);
  const location = useLocation();
  const { signIn } = useContext(SessionContext);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const request_token = searchParams.get('request_token');
    const approved = searchParams.get('approved') === 'true';

    if (approved && request_token) {
      authenticationAPI
        .createNewSession(request_token)
        .then((res) => {
          if (res.success) {
            setIsApproved(true);
            signIn(res.session_id);
          }
        })
        .catch((error: Error) => {
          console.error(`${error.name}: ${error.message}`);
          setIsApproved(false);
        });
    } else {
      console.error(`Authentication denied`);
    }
  }, [location]);

  if (isApproved)
    return <Redirect to={localStorage.getItem('prevPage') || ''} />;

  return (
    <div style={{ gridArea: 'main', padding: '15px', fontSize: '21px' }}>
      Authentication
    </div>
  );
};

export default Approve;
