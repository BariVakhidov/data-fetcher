import React from 'react';
import { NavLink } from 'react-router-dom';
import { dateConvertor, compare } from '../../../functions';
import { Game } from '../../../types/interfaces';
import s from './Game.module.scss';

const GameComponent: React.FC<Game> = ({
  homeTeamScore, visitorTeamScore, homeTeam, visitorTeam, status, date,
}) => {
  const isHomeTeamWinner = compare(
    homeTeamScore,
    visitorTeamScore,
  );

  return (
    <div className={s.game}>
      <div className={s.gameCont}>
        <div className={s.gameTeams}>
          <div
            className={s.side}
            style={{
              backgroundColor: isHomeTeamWinner
                ? 'rgb(153, 228, 153)'
                : 'rgb(250, 95, 95)',
            }}
          >
            <div className={s.name}><NavLink to={`/teams/${homeTeam.id}`}>{homeTeam.fullName}</NavLink></div>
            <div className={s.score}>{homeTeamScore}</div>
          </div>
          <span>:</span>
          <div
            className={s.side}
            style={{
              backgroundColor: isHomeTeamWinner
                ? 'rgb(250, 95, 95)'
                : 'rgb(153, 228, 153)',
            }}
          >
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
            alt=""
            height={20}
            style={{ marginRight: '10px' }}
          />
          <span>{dateConvertor(date)}</span>
        </div>
      </div>
    </div>
  );
};
export default GameComponent;
