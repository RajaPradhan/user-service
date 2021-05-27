import { createContext, ReactNode, useContext, useEffect } from 'react';

import { CurrentUserInfoState } from '../types';
import useGetCurrentUserInfo from '../hooks/useGetCurrentUserInfo';

interface Props {
  children: ReactNode;
}

const CurrentUserInfoStateContext =
  createContext<CurrentUserInfoState | undefined>(undefined);

const CurrentUserInfoProvider = ({ children }: Props) => {
  const { getCurrentUserInfo, currentUserInfoState } = useGetCurrentUserInfo();

  useEffect(() => {
    getCurrentUserInfo();
    // Disabling lint as getCurrentUserInfo cannot be used in the dep array
  }, []); // eslint-disable-line

  if (currentUserInfoState.loading || !currentUserInfoState.data) {
    return <div>loading...</div>;
  }

  return (
    <CurrentUserInfoStateContext.Provider value={currentUserInfoState}>
      {children}
    </CurrentUserInfoStateContext.Provider>
  );
};

const useCurrentUserInfoContext = () => {
  const context = useContext(CurrentUserInfoStateContext);
  if (context === undefined) {
    throw new Error(
      'useCurrentUserInfoContext must be used within a CurrentUserInfoProvider',
    );
  }
  return context;
};

export { CurrentUserInfoProvider, useCurrentUserInfoContext };
