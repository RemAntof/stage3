import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '@components/loader/loader';
import Card from '../card/card';

import ErrorPage from '@views/errorView/errorView';
import { useAnimalDetailsQuery } from '@services/API/redux';

const CardDetail: React.FC = () => {
  const { animalName } = useParams<{
    animalName: string;
  }>();
  const cardDetailRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { isLoading, isError, data } =
    useAnimalDetailsQuery({ name: animalName });

  const navigateBack = () => {
    navigate(-1);
  };

  if (isLoading) return <Loader />;

  if (isError) return <ErrorPage />;
  const animal = data.animals[0];

  return (
    <div ref={cardDetailRef}>
      <button onClick={navigateBack}>Go Back</button>
      {animal ? (
        <Card animal={animal} />
      ) : (
        <div>Animal not found</div>
      )}
    </div>
  );
};

export default CardDetail;
