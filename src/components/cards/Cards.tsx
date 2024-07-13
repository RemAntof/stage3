import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Animal from '@interfaces/animal';
import fetchApi from '@services/API/fetchApi';
import Card from './card/card';
import styles from '@components/cards/cards.module.css';
import { DEFAULT_PAGE } from '@constants/apiEndpoints';
import Pagination from './pagination/pagination';
import Loader from '@components/loader/loader';

interface Props {
  local: string;
}

const Cards: React.FC<Props> = ({ local }) => {
  const { page } = useParams<{ page: string }>();
  const navigate = useNavigate();
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activePage, setActivePage] = useState<number>(
    parseInt(page || DEFAULT_PAGE.toString(), 10) - 1
  );
  const [totalPages, setTotalPages] =
    useState<number>(DEFAULT_PAGE);

  const [storageData, setStorageData] =
    useState<string>(local);

  const updatePage = (newPage: number) => {
    setActivePage(newPage);
    navigate(`/cards/${newPage + 1}`);
  };

  useEffect(() => {
    const fetchAnimals = async () => {
      setLoading(true);
      setError(null);
      try {
        const responseData = await fetchApi(
          storageData,
          activePage
        );
        setAnimals(responseData.animals);
        setTotalPages(responseData.page.totalPages);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchAnimals();
  }, [storageData, activePage]);

  useEffect(() => {
    setStorageData(local);
  }, [local]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Animal List</h1>
      <ul className={styles.cardsBox}>
        {animals.map((animal, index) => (
          <li key={index}>
            <Card animal={animal} />
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
