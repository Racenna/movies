import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { authenticationAPI } from '../../../api/authenticationAPI/authenticationAPI';
import { SessionContext } from '../../../contexts/SessionContext';

const ProfileApprove = () => {
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

  if (isApproved) return <div className="main">Authentication approved</div>;

  return <div className="main">Authentication denied</div>;
};

export default ProfileApprove;
