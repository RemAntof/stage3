import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Card from './card/card';
import styles from '@components/cards/cards.module.css';
import { DEFAULT_PAGE } from '@constants/apiEndpoints';
import Pagination from './pagination/pagination';
import Loader from '@components/loader/loader';
import ErrorPage from '@views/errorView/errorView';
import { useAnimalQuery } from '@services/API/redux';
import CheckBox from './card/checkbox/checkbox';

interface Props {
  local: string;
}

const Cards: React.FC<Props> = ({ local }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get('page')) || 1;
  const searchQuery = searchParams.get('search') || '';
  const [activePage, setActivePage] =
    useState<number>(pageParam);
  const [storageData, setStorageData] =
    useState<string>(local);

  const { isLoading, isError, data } = useAnimalQuery({
    activePage: activePage,
    name: local,
  });

  const updatePage = (newPage: number) => {
    setActivePage(newPage);
    setSearchParams({
      page: (newPage + 1).toString(),
      search: storageData,
    });
  };

  useEffect(() => {
    setActivePage(DEFAULT_PAGE);
  }, [searchQuery]);

  useEffect(() => {
    setStorageData(local);
  }, [local]);

  if (isLoading) return <Loader />;

  if (isError) return <ErrorPage />;

  return (
    <div>
      <h1>Animal List</h1>
      <ul className={styles.cardsBox}>
        {data.animals.map((animal) => (
          <li key={animal.uid}>
            <Link to={`${animal.name}`}>
              <Card animal={animal} />
            </Link>
            <CheckBox animal={animal} />
          </li>
        ))}
      </ul>
      <Pagination
        activePage={activePage}
        totalPages={data.page.totalPages}
        setActivePage={updatePage}
      />
    </div>
  );
};

export default Cards;
