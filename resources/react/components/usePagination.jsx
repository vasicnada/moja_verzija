import { useState } from "react";

const usePagination = (itemsPerPage, initialPage = 0) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const getItemsForCurrentPage = (items) => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  const getPageCount = (totalItems) => Math.ceil(totalItems / itemsPerPage);

  return {
    currentPage,
    handlePageChange,
    getItemsForCurrentPage,
    getPageCount,
  };
};

export default usePagination;
