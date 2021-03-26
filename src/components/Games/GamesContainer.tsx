import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestGames } from '../../redux/games-reducer';
import { Game } from '../../types/interfaces';
import { RootState } from '../../redux/store';
import Games from './Games';

const GamesContainer:React.FC = () => {
  const games:Array<Game> = useSelector((state:RootState) => state.games.games);
  const totalGames:number = useSelector((state:RootState) => state.games.totalGames);
  const currentPage:number = useSelector((state:RootState) => state.games.currentPage);
  const isFetching:boolean = useSelector((state:RootState) => state.games.isFetching);
  const startDate: Date = useSelector((state: RootState) => state.games.startDate);
  const endDate: Date = useSelector((state: RootState) => state.games.endDate);
  const error: string = useSelector((state: RootState) => state.games.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (games.length === 0) dispatch(requestGames(currentPage, 6, (startDate), (endDate)));
  }, []);

  return (
    <>
      <Games
        games={games}
        currentPage={currentPage}
        totalGames={totalGames}
        isFetching={isFetching}
        startDate={startDate}
        endDate={endDate}
        error={error}
      />
    </>
  );
};
export default GamesContainer;
