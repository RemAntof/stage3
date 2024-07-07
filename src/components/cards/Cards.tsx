import React from 'react';
import Animal from '@interfaces/animal';
import fetchApi from '@services/API/fetchApi';
import Card from './card/card';

interface AnimalListState {
  animals: Animal[];
  loading: boolean;
  error: string | null;
  storageData: string;
}

interface Props {
  local: string;
}

class Cards extends React.Component<
  Props,
  AnimalListState
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      animals: [],
      loading: true,
      error: null,
      storageData: props.local,
    };
  }

  componentDidMount() {
    this.fetchAnimals();
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.local !== prevProps.local) {
      this.setState(
        { storageData: this.props.local },
        this.fetchAnimals
      );
    }
  }

  fetchAnimals = async () => {
    const { storageData } = this.state;
    this.setState({ loading: true, error: null });
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
