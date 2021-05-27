import { createContext, ReactNode, useContext } from 'react';

import { CurrentUserInfoState, RequestDispatch } from '../types';

interface Props {
  children: ReactNode;
  value: ProviderValue;
}

interface ProviderValue {
  currentUserInfoState: CurrentUserInfoState;
  currentUserInfoDispatch: RequestDispatch;
}

const CurrentUserInfoContext =
  createContext<ProviderValue | undefined>(undefined);

const CurrentUserInfoProvider = ({
  children,
  value: { currentUserInfoState, currentUserInfoDispatch },
}: Props) => {
  return (
    <CurrentUserInfoContext.Provider
      value={{ currentUserInfoState, currentUserInfoDispatch }}
    >
      {children}
    </CurrentUserInfoContext.Provider>
  );
};

const useCurrentUserInfoContext = () => {
  const context = useContext(CurrentUserInfoContext);
  if (context === undefined) {
    throw new Error(
      'useCurrentUserInfoContext must be used within a CurrentUserInfoProvider',
    );
  }
  return context;
};

export { CurrentUserInfoProvider, useCurrentUserInfoContext };
