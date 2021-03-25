import React, { FC, useEffect, useState } from "react";
import s from "./Pagination.module.scss";
import cn from "classnames";

interface PaginationProps {
  portionSize?: number;
  totalItems: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ portionSize = 10, ...props }) => {
  let pagesCount = Math.ceil(props.totalItems / props.pageSize);
  let pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  } //all pages

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let rightPageNumber = portionNumber * portionSize;
  let leftPageNumber = (portionNumber - 1) * portionSize + 1;

  useEffect(() => {
    setPortionNumber(1);
  }, [pagesCount]);

  return (
    <div className={s.pages}>
      {portionNumber > 1 && (
        <div>
          <button
            className={s.turnPageLeft}
            onClick={() => {
              setPortionNumber(1);
            }}
          >
            <img src="../../assets/images/double-arrow2.png" alt="dArrowLeft" />
          </button>
          <button
            className={s.turnPageLeft}
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            <img src="../../assets/images/arrowL.png" alt="arrowLeft" />
          </button>
        </div>
      )}
      {pages
        .filter((p) => p >= leftPageNumber && p <= rightPageNumber)
        .map((p) => {
          return (
            <div
              key={p}
              className={cn(
                { [s.selectedPage]: props.currentPage === p },
                s.page
              )}
              onClick={() => {
                props.onPageChange(p);
              }}
            >
              {p}
            </div>
          );
        })}
      {portionCount > portionNumber && (
        <div>
          <button
            className={s.turnPageRight}
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            <img src="../../assets/images/arrowR.png" alt="arrowright" />
          </button>
          <button
            className={s.turnPageRight}
            onClick={() => {
              setPortionNumber(portionCount);
            }}
          >
            <img src="../../assets/images/double-arrow.png" alt="dArrowRight" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
