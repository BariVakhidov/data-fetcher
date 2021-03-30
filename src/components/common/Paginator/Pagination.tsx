import React, { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import { PaginationProps } from '@Types/interfaces';
import s from './Pagination.module.scss';
import { PaginatorNav } from './PaginatorNav';

const Pagination: FC<PaginationProps> = ({
  portionSize = 10, totalItems,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(totalItems / pageSize);
  const pages: Array<number> = [...Array(pagesCount).keys()].map((i) => i + 1);

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const rightPageNumber = portionNumber * portionSize;
  const leftPageNumber = (portionNumber - 1) * portionSize + 1;

  useEffect(() => {
    setPortionNumber(1);
  }, [pagesCount]);

  return (
    <div className={s.pages}>
      {portionNumber > 1 && (
        <PaginatorNav
          isLeft
          setPortionNumber={setPortionNumber}
          portionNumber={portionNumber}
          portionCount={portionCount}
        />
      )}
      {pages
        .filter((p) => p >= leftPageNumber && p <= rightPageNumber)
        .map((p) => (
          <div
            key={p}
            className={cn(
              { [s.selectedPage]: currentPage === p },
              s.page,
            )}
            onClick={() => {
              onPageChange(p);
            }}
          >
            {p}
          </div>
        ))}
      {portionCount > portionNumber && (
        <PaginatorNav
          isLeft={false}
          setPortionNumber={setPortionNumber}
          portionNumber={portionNumber}
          portionCount={portionCount}
        />
      )}
    </div>
  );
};

export default Pagination;
