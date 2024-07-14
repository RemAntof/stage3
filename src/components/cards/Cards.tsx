import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Animal from '@interfaces/animal';
import fetchApi from '@services/API/fetchApi';
import Card from './card/card';
import styles from '@components/cards/cards.module.css';
import { DEFAULT_PAGE } from '@constants/apiEndpoints';
import Pagination from './pagination/pagination';
import Loader from '@components/loader/loader';
import ErrorPage from '@views/errorView/errorView';

interface Props {
  local: string;
}

const Cards: React.FC<Props> = ({ local }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get('page')) || 1;
  const searchQuery = searchParams.get('search') || '';
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activePage, setActivePage] =
    useState<number>(pageParam);
  const [totalPages, setTotalPages] =
    useState<number>(DEFAULT_PAGE);
  const [storageData, setStorageData] =
    useState<string>(local);

  const updatePage = (newPage: number) => {
    setActivePage(newPage);
    setSearchParams({
      page: (newPage + 1).toString(),
      search: storageData,
    });
  };

  useEffect(() => {
    setSearchParams({
      page: pageParam.toString(),
      search: storageData,
    });
  });

  useEffect(() => {
    const fetchAnimals = async () => {
      setLoading(true);
      setError(null);
      try {
        const responseData = await fetchApi(
          storageData,
          activePage - 1
        );
        setAnimals(responseData.animals);
        setTotalPages(responseData.page.totalPages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, [storageData, activePage]);

  useEffect(() => {
    setActivePage(DEFAULT_PAGE);
  }, [searchQuery]);

  useEffect(() => {
    setStorageData(local);
  }, [local]);

  if (loading) return <Loader />;

  if (error) return <ErrorPage />;

  return (
    <div>
      <h1>Animal List</h1>
      <ul className={styles.cardsBox}>
        {animals.map((animal) => (
          <li key={animal.uid}>
            <Link to={`/${animal.name}`}>
              <Card animal={animal} />
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        activePage={activePage}
        totalPages={totalPages}
        setActivePage={updatePage}
      />
    </div>
  );
};

export default Cards;
