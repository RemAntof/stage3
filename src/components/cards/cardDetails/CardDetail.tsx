import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Animal from '@interfaces/animal';
import fetchApi from '@services/API/fetchApi';
import Loader from '@components/loader/loader';
import Card from '../card/card';

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
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchAnimal();
  }, [animalName]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cardDetailRef.current &&
        !cardDetailRef.current.contains(
          event.target as Node
        )
      ) {
        // Clicked outside the card detail component
        // Implement logic to close the component here
        // For now, let's just log it
        console.log('Clicked outside!');
      }
    };

    document.addEventListener(
      'mousedown',
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
