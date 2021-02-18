import { createContext, useCallback, useState } from 'react';

type ContextType = {
  session_id: string | null,
  signIn: () => void,
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

const CounterContextProvider = ({ children }: Props) => {
  const defaultSessionId = localStorage.getItem('session_id')
    ? localStorage.getItem('session_id')
    : null;

  const [session_id, setSession_id] = useState(defaultSessionId);

  const signIn = useCallback(() => {
    localStorage.setItem('session_id', '11khh1kj2khk31kh23k');
    setSession_id(localStorage.getItem('session_id'));
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('session_id');
    setSession_id(null);
  }, []);

  return (
    <SessionContext.Provider value={{ session_id, signIn, signOut }}>
      {children}
    </SessionContext.Provider>
  );
};

export default CounterContextProvider;
