import React, { useState, useEffect } from 'react';
import Animal from '@interfaces/animal';
import fetchApi from '@services/API/fetchApi';
import Card from './card/card';
import styles from '@components/cards/cards.module.css';

interface Props {
  local: string;
}

const Cards: React.FC<Props> = ({ local }) => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [storageData, setStorageData] =
    useState<string>(local);

  useEffect(() => {
    fetchAnimals();
  }, [storageData]);

  useEffect(() => {
    setStorageData(local);
  }, [local]);

  const fetchAnimals = async () => {
    setLoading(true);
    setError(null);
    try {
      const animals = await fetchApi(storageData);
      setAnimals(animals);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.spinnerBox}>
        <div className={styles.configureBorder1}>
          <div className={styles.configureCore}></div>
        </div>
        <div className={styles.configureBorder2}>
          <div className={styles.configureCore}></div>
        </div>
      </div>
    );
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
    </div>
  );
};

export default Cards;
