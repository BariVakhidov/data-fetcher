import { Reducer } from 'redux';
import { GamesState } from '@Types/interfaces';
import { GamesReducerActions } from './action-types';
import { Actions } from './constants';

const initialState: GamesState = {
  gamesItems: null,
  isFetching: false,
  currentPage: 1,
  pageSize: 5,
  totalGames: 0,
  startDate: new Date(2018, 1, 1),
  endDate: new Date(),
  error: null,
};

const gamesReducer:Reducer<GamesState, GamesReducerActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case Actions.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payLoad,
      };
    case Actions.SET_GAMES:
      return {
        ...state,
        gamesItems: action.payLoad.gamesItems,
        totalGames: action.payLoad.totalGames,
      };
    case Actions.TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payLoad,
      };
    case Actions.SET_PAGE:
      return {
        ...state,
        currentPage: 1,
      };
    case Actions.SET_START_DATE:
      return {
        ...state,
        startDate: action.payLoad,
      };
    case Actions.SET_END_DATE:
      return {
        ...state,
        endDate: action.payLoad,
      };
    case Actions.SET_ERROR:
      return {
        ...state,
        error: action.payLoad,
      };
    default:
      return state;
  }
};

export default gamesReducer;
