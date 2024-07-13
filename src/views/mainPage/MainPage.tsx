import React from 'react';
import Cards from '@components/cards/Cards';
import Search from '@components/search/Search';
import { LOCAL_STORAGE_KEY } from '@constants/localStorage';
import ErrorBoundary from '@components/errorBoundary/ErrorBoundary';
import TriggerErrorButton from '@components/buttons/triggerErrorButton/TriggerErrorButton';
import useLocalStorage from 'src/hooks/useLocalStorage';

const MainPage: React.FC = () => {
  const [localStorage, setLocalStorage] = useLocalStorage(
    LOCAL_STORAGE_KEY
  );

  return (
    <div>
      <ErrorBoundary>
        <TriggerErrorButton />
        <Search
          setLocalStorage={setLocalStorage}
          localStorage={localStorage}
        />
        <Cards local={localStorage} />
      </ErrorBoundary>
    </div>
  );
};

export default MainPage;
