import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import fetchApi from '@services/API/fetchApi';
import Loader from '@components/loader/loader';
import Card from '../card/card';
import Animal from '@interfaces/animal';

const CardDetail: React.FC = () => {
  const { animalName } = useParams<{
    animalName: string;
  }>();
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const cardDetailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchAnimal = async () => {
      setLoading(true);
      setError(null);
      try {
        const responseData = await fetchApi(animalName);
        setAnimal(responseData.animals[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimal();
  }, [animalName]);

  if (loading) return <Loader />;

  if (error) return <div>Error: {error}</div>;

  return (
    <div ref={cardDetailRef}>
      {animal ? (
        <Card animal={animal} />
      ) : (
        <div>Animal not found</div>
      )}
    </div>
  );
};

export default CardDetail;
