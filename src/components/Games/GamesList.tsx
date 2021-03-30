import React, { useCallback, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useDispatch } from 'react-redux';
import { GamesProps } from '@Types/interfaces';
import { requestGames } from '@Redux/games/thunk';
import Pagination from '@Common/Paginator/Pagination';
import s from './Games.module.scss';
import GamesListWrapper from './GamesListWrapper';

const GamesList: React.FC<GamesProps> = ({
  gamesItems,
  totalGames,
  currentPage,
  startDate,
  endDate,
  isFetching,
  error,
}) => {
  const dispatch = useDispatch();

  const setStart = useCallback((value: Date) => {
    dispatch(requestGames({
      currentPage: 1, pageSize: 6, startDate: value, endDate,
    }));
  }, [endDate]);

  const setEnd = useCallback((value: Date) => {
    dispatch(requestGames({
      currentPage: 1, pageSize: 6, startDate, endDate: value,
    }));
  }, [startDate]);

  const onPageChange = useCallback((currentPageNumber:number) => {
    dispatch(requestGames({
      currentPage: currentPageNumber, pageSize: 6, startDate, endDate,
    }));
  }, [startDate, endDate]);

  useEffect(() => {
    if (gamesItems === null) {
      dispatch(requestGames({
        currentPage, pageSize: 6, startDate, endDate,
      }));
    }
  }, []);
  return (
    <div className={s.games}>
      <div className={s.search}>
        <div className={s.searchParam}>Date range:</div>
        <DatePicker
          className={s.datePicker}
          format="d/M/y"
          clearIcon={null}
          onClickDay={(value:Date) => {
            setStart(value);
          }}
          locale="ru-RU"
          value={startDate}
        />
        -
        <DatePicker
          className={s.datePicker}
          format="d/M/y"
          clearIcon={null}
          onClickDay={(value:Date) => {
            setEnd(value);
          }}
          maxDate={new Date()}
          locale="ru-RU"
          value={endDate}
        />
      </div>
      <GamesListWrapper isFetching={isFetching} gamesItems={gamesItems} error={error} />
      <Pagination
        totalItems={totalGames}
        pageSize={6}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};
export default GamesList;
