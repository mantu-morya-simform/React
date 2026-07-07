import { useState } from "react";

const usePagination = ({ data, pageSize }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const totalPages = data.length / pageSize;

  // function next() {
  //   setcurrentPage((prev) => prev + 1);
  // }

  // function previous() {
  //   setcurrentPage((prev) => prev - 1);
  // }

  // function goToPage(page) {
  //   setcurrentPage(page);
  // }

  // function setPageSize(size) {
  //   setcurrentPage(size);
  // }

  // function paginatedData() {
  //   const start = (currentPage - 1) * pageSize;
  //   const end = start + pageSize;
  //   const newData = data.slice(start, end);
  //   return newData;
  // }

  // const canGoNext = currentPage <= totalPages;
  // const canGoPrevious = currentPage >= 1;

  return {
    currentPage,
    totalPages,
    paginatedData,
    canGoNext,
    canGoPrevious,
    next,
    previous,
    goToPage,
    setPageSize,
    pageSize,
  };
};

export default usePagination;
