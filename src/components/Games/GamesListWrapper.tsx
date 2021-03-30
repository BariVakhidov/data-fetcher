import Preloader from '@Components/common/Preloader';
import { GamesListWrapperProps } from '@Types/interfaces';
import React from 'react';
import GameComponent from './Game';
import s from './Games.module.scss';

const GamesListWrapper:React.FC<GamesListWrapperProps> = ({ isFetching, gamesItems, error }) => {
  if (error) return <div>{error}</div>;
  return (
    isFetching || gamesItems === null ? <Preloader /> : (
      <div className={s.gamesContainer}>
        {gamesItems.map((game) => (
          <GameComponent
            key={game.id}
            date={game.date}
            homeTeam={game.homeTeam}
            homeTeamScore={game.homeTeamScore}
            id={game.id}
            period={game.period}
            postseason={game.postseason}
            season={game.season}
            status={game.status}
            time={game.time}
            visitorTeam={game.visitorTeam}
            visitorTeamScore={game.visitorTeamScore}
          />
        ))}
      </div>
    )
  );
};

export default GamesListWrapper;
