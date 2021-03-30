import { Reducer } from 'redux';
import { TeamsState } from '@Types/interfaces';
import { TeamsReducerActions } from './action-types';
import { Actions } from './constants';

const initialState: TeamsState = {
  teamsItems: null,
  isFetching: false,
  currentPage: 1,
  pageSize: 5,
  totalTeams: 0,
  showingTeam: null,
  error: null,
};

const teamsReducer:Reducer<TeamsState, TeamsReducerActions> = (state = initialState,
  action) => {
  switch (action.type) {
    case Actions.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payLoad,
      };
    case Actions.SET_TEAMS:
      return {
        ...state,
        teamsItems: action.payLoad.teamsItems,
        totalTeams: action.payLoad.totalTeams,
      };
    case Actions.TOGGLE_IS_FETCHING:
      return {
        ...state, isFetching: action.payLoad,
      };
    case Actions.SET_SHOWING_TEAM:
      return {
        ...state,
        showingTeam: action.payLoad,
      };
    case Actions.SET_PAGE:
      return {
        ...state, currentPage: 1,
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

export default teamsReducer;
