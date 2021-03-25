import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { GamesProps } from "../../types/interfaces";
import s from "./Games.module.scss";
import Pagination from "../common/Paginator/Pagination";
import GameComponent from "./Game/Game";
import { useDispatch } from "react-redux";
import { dateConvertorForAPI } from "../../functions";
import { requestGames } from "../../redux/games-reducer";
import Preloader from "../../components/common/Preloader/Preloader";

const Games: React.FC<GamesProps> = ({
  games,
  totalGames,
  currentPage,
  startDate,
  endDate,
  isFetching,
  error
}) => {
  
  const dispatch = useDispatch();

  const [value1, onChange1] = useState(new Date()); //for start date calendar
  const [value2, onChange2] = useState(new Date()); //for end date calendar

  const [visibleStartDateCalendar, setVisibleStartDateCalendar] = useState(false);
  const [visibleEndDateCalendar, setVisibleEndDateCalendar] = useState(false);

  const setStart = (value: Date) => {
    dispatch(requestGames(1, 6, (value), (endDate)));
    setVisibleStartDateCalendar(false);
  };

  const setEnd = (value: Date) => {
    dispatch(requestGames(1, 6, (startDate), (value)));
    setVisibleEndDateCalendar(false);
  };
  return (
    <div className={s.games}>
      <div className={s.search}>
        <div className={s.searchParam}>Date range:</div>
        <span onClick={visibleEndDateCalendar ? undefined : () => {setVisibleStartDateCalendar((visibleCalendar) => !visibleCalendar);}}>
          {startDate.toDateString()}
        </span>
        -
        <span onClick={visibleStartDateCalendar ? undefined : () => {setVisibleEndDateCalendar((visibleCalendar) => !visibleCalendar);}}>
          {endDate.toDateString()}
        </span>
        {visibleStartDateCalendar && (
          <div className={s.calendar}>
          <Calendar
            onClickDay={(value:Date) => {dateConvertorForAPI
              setStart(value);
            }}
            locale={"ru-RU"}
            onChange={onChange1}
            value={startDate}
          />
          </div>
        )}
        {visibleEndDateCalendar && (
          <div className={s.calendar}>
            <Calendar
            onClickDay={(value:Date) => {
              setEnd(value);
            }}
            maxDate={new Date}
            locale={"ru-RU"}
            onChange={onChange2}
            value={endDate}
          />
          </div>
        )}
      </div>
      {isFetching ?  <Preloader /> :  <div className={s.gamesContainer}>
        {error ? <div>{error}</div> : games.map((game) => (
          <GameComponent
            key={game.id}
            date={game.date}
            home_team={game.home_team}
            home_team_score={game.home_team_score}
            id={game.id}
            period={game.period}
            postseason={game.postseason}
            season={game.season}
            status={game.status}
            time={game.time}
            visitor_team={game.visitor_team}
            visitor_team_score={game.visitor_team_score}
          />
        ))}
      </div>}     
      <Pagination
        totalItems={totalGames}
        pageSize={6}
        currentPage={currentPage}
        onPageChange={(currentPage) => dispatch(requestGames(currentPage, 6, (startDate), (endDate)))}
      />
    </div>
  );
};
export default Games;
