import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@Redux/store';
import GamesList from './GamesList';

const GamesContainer:React.FC = () => {
  const {
    gamesItems, totalGames, currentPage, isFetching, startDate, endDate, error,
  } = useSelector((state:RootState) => state.games);
  return (
    <GamesList
      gamesItems={gamesItems}
      currentPage={currentPage}
      totalGames={totalGames}
      isFetching={isFetching}
      startDate={startDate}
      endDate={endDate}
      error={error}
    />
  );
};
export default GamesContainer;
