import { Team, TeamsState } from '../types/interfaces';
import { AppThunk } from './store';
import { teamsAPI } from '../api/api';
import { TeamsReducerActions } from '../types/teams-reducer-actions';


export enum Actions {
  SET_TEAMS = 'data-fetcher/teams/SET_TEAMS',
  SET_PAGE = 'data-fetcher/teams/SET_PAGE',
  SET_CURRENT_PAGE = 'data-fetcher/teams/SET_CURRENT_PAGE',
  SET_SHOWING_TEAM_ID = 'data-fetcher/teams/SET_SHOWING_GAME_ID',
  SET_SHOWING_TEAM = 'data-fetcher/teams/SET_SHOWING_GAME',
  SET_TOTAL_TEAMS = 'data-fetcher/teams/SET_TOTAL_GAMES',
  TOGGLE_IS_FETCHING = 'data-fetcher/teams/TOGGLE_IS_FETCHING',
  SET_ERROR = 'data-fetcher/teams/SET_ERROR'
}

export const setTeams = (teams: Array<Team>): TeamsReducerActions => ({ type: Actions.SET_TEAMS, teams });
export const setPage = (): TeamsReducerActions => ({ type: Actions.SET_PAGE });
export const toggleIsFetching = (isFetching:boolean): TeamsReducerActions => ({ type: Actions.TOGGLE_IS_FETCHING, isFetching });
export const setShowingTeamId = (showingTeamId: number): TeamsReducerActions => ({ type: Actions.SET_SHOWING_TEAM_ID, showingTeamId});
export const setShowingTeam = (showingTeam: Team): TeamsReducerActions => ({ type: Actions.SET_SHOWING_TEAM, showingTeam});
export const setCurrentPage = (pageNumber: number): TeamsReducerActions => ({type: Actions.SET_CURRENT_PAGE,pageNumber,});
export const setError = (error:string):TeamsReducerActions => ({type: Actions.SET_ERROR, error})
export const setTotalTeams = (totalTeams: number): TeamsReducerActions => ({ type: Actions.SET_TOTAL_TEAMS, totalTeams });


const initialState: TeamsState = {
  teams: [],
  isFetching: false,
  currentPage: 1,
  pageSize: 5,
  totalTeams: 0,
  showingTeamId: null,
  showingTeam: null,
  error:""
};

const teamsReducer = (state: TeamsState = initialState,
  action: TeamsReducerActions): TeamsState => {
  switch (action.type) {
    case Actions.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNumber,
      };
    case Actions.SET_TEAMS:
      return {
        ...state,
        teams: action.teams,
      };
    case Actions.SET_TOTAL_TEAMS:
      return {
        ...state, totalTeams: action.totalTeams,
      };
    case Actions.TOGGLE_IS_FETCHING:
      return {
        ...state, isFetching: action.isFetching,
      };
    case Actions.SET_SHOWING_TEAM_ID:
        return {
          ...state,
          showingTeamId : action.showingTeamId
        }
    case Actions.SET_SHOWING_TEAM :
        return {
          ...state,
          showingTeam: action.showingTeam
        }
    case Actions.SET_PAGE:
      return {
        ...state, currentPage: 1,
      };
    case Actions.SET_ERROR: 
      return {
        ...state,
        error:action.error
      }
    default:
      return state;
  }
};

export default teamsReducer;

export const requestTeams = (currentPage:number, pageSize:number):AppThunk => async (dispatch) => {
  dispatch(setCurrentPage(currentPage));
  dispatch(toggleIsFetching(true));
  try {
    const response = await teamsAPI.getTeams(currentPage, pageSize);
    dispatch(setTeams(response.data.data));
    dispatch(setTotalTeams(response.data.meta.total_count));
  }
  catch(error) {
    dispatch(setError(error.message));
  }
  finally {
    dispatch(toggleIsFetching(false));
  }
};

export const requestTeam = (teamId: number):AppThunk => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  try {
    const data = await teamsAPI.getTeam(teamId);
    dispatch(setShowingTeam(data));
  }
  catch(error) {
   dispatch(setError(error.message))
  }
  finally {
    dispatch(toggleIsFetching(false));
  }
};