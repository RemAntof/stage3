import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('App component snapshot - dark theme, outlet hidden', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(asFragment()).toMatchSnapshot();
});

test('App component snapshot - dark theme, outlet visible', () => {
  const { asFragment } = render(
    <MemoryRouter initialEntries={['/some-path']}>
      <App />
    </MemoryRouter>
  );

  expect(asFragment()).toMatchSnapshot();
});

test('App component snapshot - light theme, outlet hidden', () => {
  const { asFragment, getByRole } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const checkbox = getByRole('checkbox');
  fireEvent.click(checkbox);

  expect(asFragment()).toMatchSnapshot();
});
