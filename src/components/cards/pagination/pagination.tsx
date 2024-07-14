import calcPaginationArray from '@utils/calcPaginationArray';
import React from 'react';

interface PaginationProps {
  activePage: number;
  totalPages: number;
  setActivePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  activePage,
  totalPages,
  setActivePage,
}) => {
  const prolongation = '...';
  const visiblePages = 5;
  const pageNumbers = calcPaginationArray(
    totalPages,
    visiblePages,
    activePage,
    prolongation
  );

  const handleActivePage = (
    page: number | typeof prolongation
  ) => {
    if (typeof page === 'number') {
      setActivePage(page - 1);
    }
  };

  return (
    <div>
      <button
        onClick={() => setActivePage(activePage - 1)}
        disabled={activePage === 0}
      >
        {'<'}
      </button>
      {pageNumbers.map((page, index) => (
        <button
          key={index}
          onClick={() => handleActivePage(page as number)}
          disabled={
            page === activePage + 1 || page === prolongation
          }
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => setActivePage(activePage + 1)}
        disabled={activePage === totalPages - 1}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
