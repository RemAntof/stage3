import calcPaginationArray from './calcPaginationArray';

describe('calcPaginationArray function', () => {
  it('should generate correct page numbers when totalPages <= visiblePages', () => {
    const totalPages = 5;
    const visiblePages = 5;
    const activePage = 3;
    const prolongation = '...';

    const result = calcPaginationArray(
      totalPages,
      visiblePages,
      activePage,
      prolongation
    );

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle start boundary correctly', () => {
    const totalPages = 10;
    const visiblePages = 5;
    const activePage = 1;
    const prolongation = '...';

    const result = calcPaginationArray(
      totalPages,
      visiblePages,
      activePage,
      prolongation
    );

    expect(result).toEqual([1, 2, 3, 4, 5, '...', 10]);
  });

  it('should handle end boundary correctly', () => {
    const totalPages = 10;
    const visiblePages = 5;
    const activePage = 10;
    const prolongation = '...';

    const result = calcPaginationArray(
      totalPages,
      visiblePages,
      activePage,
      prolongation
    );

    expect(result).toEqual([1, '...', 6, 7, 8, 9, 10]);
  });

  it('should handle middle range correctly', () => {
    const totalPages = 10;
    const visiblePages = 5;
    const activePage = 5;
    const prolongation = '...';

    const result = calcPaginationArray(
      totalPages,
      visiblePages,
      activePage,
      prolongation
    );

    expect(result).toEqual([
      1,
      '...',
      3,
      4,
      5,
      6,
      7,
      8,
      '...',
      10,
    ]);
  });

  it('should handle prolonged start and end', () => {
    const totalPages = 15;
    const visiblePages = 5;
    const activePage = 8;
    const prolongation = '...';

    const result = calcPaginationArray(
      totalPages,
      visiblePages,
      activePage,
      prolongation
    );

    expect(result).toEqual([
      1,
      '...',
      6,
      7,
      8,
      9,
      10,
      11,
      '...',
      15,
    ]);
  });

  it('should handle prolonged start, end, and active near start', () => {
    const totalPages = 20;
    const visiblePages = 7;
    const activePage = 3;
    const prolongation = '...';

    const result = calcPaginationArray(
      totalPages,
      visiblePages,
      activePage,
      prolongation
    );

    expect(result).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      '...',
      20,
    ]);
  });

  it('should handle prolonged start, end, and active near end', () => {
    const totalPages = 20;
    const visiblePages = 7;
    const activePage = 18;
    const prolongation = '...';

    const result = calcPaginationArray(
      totalPages,
      visiblePages,
      activePage,
      prolongation
    );

    expect(result).toEqual([
      1,
      '...',
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ]);
  });

  it('should handle small visiblePages', () => {
    const totalPages = 5;
    const visiblePages = 3;
    const activePage = 3;
    const prolongation = '...';

    const result = calcPaginationArray(
      totalPages,
      visiblePages,
      activePage,
      prolongation
    );

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle totalPages equal to visiblePages', () => {
    const totalPages = 5;
    const visiblePages = 5;
    const activePage = 3;
    const prolongation = '...';

    const result = calcPaginationArray(
      totalPages,
      visiblePages,
      activePage,
      prolongation
    );

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
