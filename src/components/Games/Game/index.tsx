import React, { useMemo } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { dateConvertor, compare } from '@/functions';
import { Game } from '@Types/interfaces';
import s from './Game.module.scss';

const GameComponent: React.FC<Game> = ({
  homeTeamScore, visitorTeamScore, homeTeam, visitorTeam, status, date,
}) => {
  const isHomeTeamWinner = compare(
    homeTeamScore,
    visitorTeamScore,
  );
  const gameDate = useMemo(() => dateConvertor(date), [date]);
  return (
    <div className={s.game}>
      <div className={s.gameCont}>
        <div className={s.gameTeams}>
          <div className={cn(s.side, isHomeTeamWinner ? s.winner : s.loser)}>
            <div className={s.name}><NavLink to={`/teams/${homeTeam.id}`}>{homeTeam.fullName}</NavLink></div>
            <div className={s.score}>{homeTeamScore}</div>
          </div>
          <span>:</span>
          <div className={cn(s.side, isHomeTeamWinner ? s.loser : s.winner)}>
            <div className={s.name}><NavLink to={`/teams/${visitorTeam.id}`}>{visitorTeam.fullName}</NavLink></div>
            <div className={s.score}>{visitorTeamScore}</div>
          </div>
        </div>
        <span>
          Status:
          {status}
        </span>
        <div className={s.dateCont}>
          <img
            src="../../../assets/images/calendar.png"
            alt="calendar"
          />
          <span>{gameDate}</span>
        </div>
      </div>
    </div>
  );
};
export default GameComponent;
