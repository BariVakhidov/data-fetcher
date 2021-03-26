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
            <span><NavLink to={`/teams/${homeTeam.id}`}>{homeTeam.fullName}</NavLink></span>
            <span>{homeTeamScore}</span>
          </div>
          :
          <div
            className={s.side}
            style={{
              backgroundColor: isHomeTeamWinner
                ? 'rgb(250, 95, 95)'
                : 'rgb(153, 228, 153)',
            }}
          >
            <NavLink to={`/teams/${visitorTeam.id}`}><span>{visitorTeam.fullName}</span></NavLink>
            <span>{visitorTeamScore}</span>
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
