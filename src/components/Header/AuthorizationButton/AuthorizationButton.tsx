type Props = {
  handleSignIn: () => void,
};

const AuthorizationButton = ({ handleSignIn }: Props) => {
  return (
    <button className="sign-in-button" onClick={handleSignIn}>
      Sign in
    </button>
  );
};

export default AuthorizationButton;
