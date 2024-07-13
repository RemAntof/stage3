const calcPaginationArray = (
  totalPages: number,
  visiblePages: number,
  activePage: number,
  prolongation: string
) => {
  const pageNumbers: (number | typeof prolongation)[] = [];
  if (totalPages <= visiblePages) {
    for (let i = 0; i < totalPages; i++) {
      pageNumbers.push(i + 1);
    }
  } else {
    let startPage =
      activePage - Math.floor(visiblePages / 2);
    let endPage = activePage + Math.ceil(visiblePages / 2);

    if (startPage < 1) {
      startPage = 1;
      endPage = visiblePages;
    }
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = totalPages - visiblePages + 1;
    }

    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) {
        pageNumbers.push(prolongation);
      }
    }
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(prolongation);
      }
      pageNumbers.push(totalPages);
    }
  }
  return pageNumbers;
};
export default calcPaginationArray;
