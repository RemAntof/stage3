import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Animal from '@interfaces/animal';
import fetchApi from '@services/API/fetchApi';
import Loader from '@components/loader/loader';
import Card from '../card/card';

const CardDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnimal = async () => {
      setLoading(true);
      setError(null);
      try {
        const responseData = await fetchApi(id);
        setAnimal(responseData.animals[0]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchAnimal();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return animal ? (
    <Card animal={animal} />
  ) : (
    <div>Animal not found</div>
  );
};

export default CardDetail;
