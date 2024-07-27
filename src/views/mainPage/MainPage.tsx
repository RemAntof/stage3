import React from 'react';
import Cards from '@components/cards/Cards';
import Search from '@components/search/Search';
import { LOCAL_STORAGE_KEY } from '@constants/localStorage';
import ErrorBoundary from '@components/errorBoundary/ErrorBoundary';
import useLocalStorage from '@hooks/useLocalStorage';
import Flyout from '@components/flyout/flyout';

const MainPage: React.FC = () => {
  const [localStorage, setLocalStorage] = useLocalStorage(
    LOCAL_STORAGE_KEY
  );

  return (
    <div>
      <ErrorBoundary>
        <Search
          setLocalStorage={setLocalStorage}
          localStorage={localStorage}
        />
        <Cards local={localStorage} />
        <Flyout />
      </ErrorBoundary>
    </div>
  );
};

export default MainPage;
