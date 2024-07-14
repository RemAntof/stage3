import {
  render,
  fireEvent,
  screen,
} from '@testing-library/react';
import Pagination from './pagination';
import '@testing-library/jest-dom';

// Mock setActivePage function
const mockSetActivePage = jest.fn();

describe('Pagination component', () => {
  beforeEach(() => {
    mockSetActivePage.mockClear();
  });

  it('renders pagination buttons correctly', () => {
    render(
      <Pagination
        activePage={0}
        totalPages={5}
        setActivePage={mockSetActivePage}
      />
    );

    // Check if pagination buttons '<', '1', '2', '3', '4', '5', '>'
    expect(screen.getByText('<')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('>')).toBeInTheDocument();
  });

  it('disables previous button on first page', () => {
    render(
      <Pagination
        activePage={0}
        totalPages={5}
        setActivePage={mockSetActivePage}
      />
    );

    const previousButton = screen.getByText('<');
    fireEvent.click(previousButton);

    expect(mockSetActivePage).not.toHaveBeenCalled();
  });

  it('enables previous button on second page', () => {
    render(
      <Pagination
        activePage={1}
        totalPages={5}
        setActivePage={mockSetActivePage}
      />
    );

    const previousButton = screen.getByText('<');
    fireEvent.click(previousButton);

    expect(mockSetActivePage).toHaveBeenCalled();
    expect(mockSetActivePage).toHaveBeenCalledWith(0);
  });

  it('disables next button on last page', () => {
    render(
      <Pagination
        activePage={4}
        totalPages={5}
        setActivePage={mockSetActivePage}
      />
    );

    const nextButton = screen.getByText('>');
    fireEvent.click(nextButton);

    expect(mockSetActivePage).not.toHaveBeenCalled();
  });

  it('enables next button on second last page', () => {
    render(
      <Pagination
        activePage={3}
        totalPages={5}
        setActivePage={mockSetActivePage}
      />
    );

    const nextButton = screen.getByText('>');
    fireEvent.click(nextButton);

    expect(mockSetActivePage).toHaveBeenCalled();
    expect(mockSetActivePage).toHaveBeenCalledWith(4);
  });
});
