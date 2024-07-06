import Animal from '@interfaces/animal';
import fetchApi from '@services/API/fetchApi';
import React from 'react';
import Card from './card/card';
import { LOCAL_STORAGE_KEY } from '@constants/localStorage';
import getLocalStorage from '@services/localStorage/getlocalStorage';

interface AnimalListState {
  animals: Animal[];
  loading: boolean;
  error: string | null;
  storageData: string;
}

class Cards extends React.Component<
  PropertyDefinition,
  AnimalListState
> {
  constructor(props: PropertyDefinition) {
    super(props);
    this.state = {
      animals: [],
      loading: true,
      error: null,
      storageData: getLocalStorage(LOCAL_STORAGE_KEY),
    };
  }
  componentDidMount() {
    this.fetchAnimals();
  }

  fetchAnimals = async () => {
    const { storageData } = this.state;
    try {
      const animals = await fetchApi(storageData);
      this.setState({ animals, loading: false });
    } catch (error) {
      this.setState({
        error: error.message,
        loading: false,
      });
    }
  };

  render() {
    const { animals, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }
    return (
      <div>
        <h1>Animal List</h1>
        <ul>
          {animals.map((animal, index) => (
            <li key={index}>
              <Card animal={animal} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cards;
