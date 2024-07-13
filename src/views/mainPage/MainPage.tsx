import React, { useState } from 'react';
import Cards from '@components/cards/Cards';
import Search from '@components/search/Search';
import { LOCAL_STORAGE_KEY } from '@constants/localStorage';
import getLocalStorage from '@services/localStorage/getlocalStorage';
import ErrorBoundary from '@components/errorBoundary/ErrorBoundary';
import TriggerErrorButton from '@components/buttons/triggerErrorButton/TriggerErrorButton';

const MainPage: React.FC = () => {
  const [local, setLocal] = useState<string>(
    getLocalStorage(LOCAL_STORAGE_KEY) || ''
  );

  const updateLocal = (newLocal: string) => {
    setLocal(newLocal);
  };

  return (
    <div>
      <ErrorBoundary>
        <TriggerErrorButton />
        <Search updateLocal={updateLocal} />
        <Cards local={local} />
      </ErrorBoundary>
    </div>
  );
};

export default MainPage;
