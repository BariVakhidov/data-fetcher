import React from 'react';
import cn from 'classnames';
import s from './Pagination.module.scss';

interface Props {
  setPortionNumber: (portion:number)=> void;
  isLeft:boolean;
  portionNumber:number;
  portionCount:number;
}

export const PaginatorNav: React.FC<Props> = ({
  setPortionNumber, isLeft, portionNumber, portionCount,
}) => (
  <div>
    <button
      type="button"
      className={cn(isLeft ? s.turnPageLeft : s.turnPageRight)}
      onClick={() => {
        setPortionNumber(isLeft ? 1 : portionNumber + 1);
      }}
    >
      <img src={isLeft ? '../../assets/images/double-arrow2.png' : '../../assets/images/arrowR.png'} alt={isLeft ? 'dArrowLeft' : 'arrowRight'} />
    </button>
    <button
      type="button"
      className={cn(isLeft ? s.turnPageLeft : s.turnPageRight)}
      onClick={() => {
        setPortionNumber(isLeft ? portionNumber - 1 : portionCount);
      }}
    >
      <img src={isLeft ? '../../assets/images/arrowL.png' : '../../assets/images/double-arrow.png'} alt={isLeft ? 'arrowLeft' : 'dArrowRight'} />
    </button>
  </div>
);
