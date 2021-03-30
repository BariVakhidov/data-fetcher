import { Actions } from '@Redux/teams/constants';
import { GetTeams } from '@Types/api-response';
import { Team } from '@Types/interfaces';
import { TeamsReducerActions } from './action-types';

export const setTeams = (payLoad: GetTeams): TeamsReducerActions => ({
  type: Actions.SET_TEAMS,
  payLoad,
});
export const setPage = (): TeamsReducerActions => ({ type: Actions.SET_PAGE });
export const toggleIsFetching = (payLoad: boolean): TeamsReducerActions => ({
  type: Actions.TOGGLE_IS_FETCHING,
  payLoad,
});
export const setShowingTeam = (payLoad: Team): TeamsReducerActions => ({
  type: Actions.SET_SHOWING_TEAM,
  payLoad,
});
export const setCurrentPage = (payLoad: number): TeamsReducerActions => ({
  type: Actions.SET_CURRENT_PAGE,
  payLoad,
});
export const setError = (payLoad: string): TeamsReducerActions => ({
  type: Actions.SET_ERROR,
  payLoad,
});
