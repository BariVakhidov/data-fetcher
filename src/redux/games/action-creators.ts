import { GetGames } from '@Types/api-response';
import { GamesReducerActions } from './action-types';
import { Actions } from './constants';

export const setGames = (
  payLoad: GetGames,
): GamesReducerActions => ({
  type: Actions.SET_GAMES,
  payLoad,
});
export const setStartDate = (payLoad: Date): GamesReducerActions => ({
  type: Actions.SET_START_DATE,
  payLoad,
});
export const setEndDate = (payLoad: Date): GamesReducerActions => ({
  type: Actions.SET_END_DATE,
  payLoad,
});
export const setPage = (): GamesReducerActions => ({ type: Actions.SET_PAGE });
export const setCurrentPage = (payLoad: number): GamesReducerActions => ({
  type: Actions.SET_CURRENT_PAGE,
  payLoad,
});
export const toggleIsFetching = (payLoad: boolean): GamesReducerActions => ({
  type: Actions.TOGGLE_IS_FETCHING,
  payLoad,
});
export const setError = (payLoad: string): GamesReducerActions => ({
  type: Actions.SET_ERROR,
  payLoad,
});
