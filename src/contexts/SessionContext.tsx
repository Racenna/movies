import { createContext, useCallback, useState } from 'react';

type ContextType = {
  session_id: string,
  signIn: () => void,
  signOut: () => void,
};

export const SessionContext = createContext<ContextType>({
  session_id: '',
  signIn: () => {},
  signOut: () => {},
});

type Props = {
  children: React.ReactNode,
};

const CounterContextProvider = ({ children }: Props) => {
  const [session_id, setSession_id] = useState('');

  const signIn = useCallback(() => {
    setSession_id('some00fake00session124id');
  }, []);

  const signOut = useCallback(() => {
    setSession_id('');
  }, []);

  return (
    <SessionContext.Provider value={{ session_id, signIn, signOut }}>
      {children}
    </SessionContext.Provider>
  );
};

export default CounterContextProvider;
