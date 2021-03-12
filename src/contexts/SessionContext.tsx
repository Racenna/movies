import { createContext, useState } from 'react';

type ContextType = {
  session_id: string | null,
  signIn: (value: string) => void,
  signOut: () => void,
};

export const SessionContext = createContext<ContextType>({
  session_id: null,
  signIn: () => {},
  signOut: () => {},
});

type Props = {
  children: React.ReactNode,
};

const SessionContextProvider = ({ children }: Props) => {
  const defaultSessionId = localStorage.getItem('session_id');

  const [session_id, setSession_id] = useState(defaultSessionId);

  const signIn = (value: string) => {
    if (session_id) {
      console.error(`Authentication denied: session exist`);
      return;
    }
    localStorage.setItem('session_id', value);
    setSession_id(localStorage.getItem('session_id'));
  };

  const signOut = () => {
    localStorage.removeItem('session_id');
    setSession_id(null);
  };

  return (
    <SessionContext.Provider value={{ session_id, signIn, signOut }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
