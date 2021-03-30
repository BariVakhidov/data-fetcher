import { Actions } from '@Redux/teams/constants';
import { GetTeams } from '@Types/api-response';
import { Team } from '../../types/interfaces';

interface SetTeams {
  type: typeof Actions.SET_TEAMS;
  payLoad: GetTeams
}

interface ToggleIsFetching {
  type: typeof Actions.TOGGLE_IS_FETCHING;
  payLoad: boolean;
}

interface SetPage {
  type: typeof Actions.SET_PAGE;
}

interface SetCurrentPage {
  type: typeof Actions.SET_CURRENT_PAGE;
  payLoad: number;
}

interface SetShowingTeam {
  type: typeof Actions.SET_SHOWING_TEAM;
  payLoad: Team;
}
interface SetError {
  type: typeof Actions.SET_ERROR;
  payLoad: string;
}

export type TeamsReducerActions =
  | SetTeams
  | SetCurrentPage
  | SetPage
  | SetShowingTeam
  | ToggleIsFetching
  | SetError;
