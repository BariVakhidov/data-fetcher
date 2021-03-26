import { batch } from 'react-redux';
import { Game, GamesState } from '../types/interfaces';
import { AppThunk } from './store';
import { gamesAPI } from '../api/api';
import { dateConvertorForAPI } from '../functions';
import { GamesReducerActions } from '../types/games-reducer-actions';

export enum Actions {
  SET_GAMES = 'data-fetcher/games/SET_GAMES',
  SET_PAGE = 'data-fetcher/games/SET_PAGE',
  SET_START_DATE = 'data-fetcher/games/SET_START_DATE',
  SET_END_DATE = 'data-fetcher/games/SET_END_DATE',
  SET_CURRENT_PAGE = 'data-fetcher/games/SbatchET_CURRENT_PAGE',
  SET_TOTAL_GAMES = 'data-fetcher/games/SET_TOTAL_GAMES',
  TOGGLE_IS_FETCHING = 'data-fetcher/games/TOGGLE_IS_FETCHING',
  SET_ERROR = 'data-fetcher/games/SET_ERROR',
}

export const setGames = (games: Array<Game>): GamesReducerActions => ({
  type: Actions.SET_GAMES,
  games,
});
export const setStartDate = (startDate: Date): GamesReducerActions => ({
  type: Actions.SET_START_DATE,
  startDate,
});
export const setEndDate = (endDate: Date): GamesReducerActions => ({
  type: Actions.SET_END_DATE,
  endDate,
});
export const setPage = (): GamesReducerActions => ({ type: Actions.SET_PAGE });
export const setCurrentPage = (pageNumber: number): GamesReducerActions => ({
  type: Actions.SET_CURRENT_PAGE,
  pageNumber,
});

export const setTotalGames = (totalGames: number): GamesReducerActions => ({
  type: Actions.SET_TOTAL_GAMES,
  totalGames,
});

export const toggleIsFetching = (isFetching: boolean): GamesReducerActions => ({
  type: Actions.TOGGLE_IS_FETCHING,
  isFetching,
});
export const setError = (error: string): GamesReducerActions => ({
  type: Actions.SET_ERROR,
  error,
});
const initialState: GamesState = {
  games: [],
  isFetching: false,
  currentPage: 1,
  pageSize: 5,
  totalGames: 0,
  startDate: new Date(2018, 1, 1),
  endDate: new Date(),
  error: '',
};

const gamesReducer = (
  state: GamesState = initialState,
  action: GamesReducerActions,
): GamesState => {
  switch (action.type) {
    case Actions.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNumber,
      };
    case Actions.SET_GAMES:
      return {
        ...state,
        games: action.games,
      };
    case Actions.SET_TOTAL_GAMES:
      return {
        ...state,
        totalGames: action.totalGames,
      };
    case Actions.TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case Actions.SET_PAGE:
      return {
        ...state,
        currentPage: 1,
      };
    case Actions.SET_START_DATE:
      return {
        ...state,
        startDate: action.startDate,
      };
    case Actions.SET_END_DATE:
      return {
        ...state,
        endDate: action.endDate,
      };
    case Actions.SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default gamesReducer;

export const requestGames = (
  currentPage: number,
  pageSize: number,
  startDate: Date,
  endDate: Date,
): AppThunk => async (dispatch) => {
  batch(() => {
    dispatch(setCurrentPage(currentPage));
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
    dispatch(toggleIsFetching(true));
  });
  try {
    const response = await gamesAPI.getGames(
      currentPage,
      pageSize,
      dateConvertorForAPI(startDate),
      dateConvertorForAPI(endDate),
    );
    batch(() => {
      dispatch(setGames(response.data.data));
      dispatch(setTotalGames(response.data.meta.totalCount));
    });
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(toggleIsFetching(false));
  }
};
