type Props = {
  signIn: () => void,
};

const AuthorizationButton = ({ signIn }: Props) => {
  return (
    <button
      className="sign-in-button"
      onClick={() => {
        signIn();
      }}
    >
      Sign in
    </button>
  );
};

export default AuthorizationButton;
