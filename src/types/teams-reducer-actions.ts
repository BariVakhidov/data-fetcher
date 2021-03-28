import { Actions } from '../redux/teams-reducer';
import { Team } from './interfaces';

interface SetTeams {
  type: typeof Actions.SET_TEAMS;
  teams: Array<Team>;
  totalTeams: number;
}

interface ToggleIsFetching {
  type: typeof Actions.TOGGLE_IS_FETCHING;
  isFetching: boolean;
}

interface SetPage {
  type: typeof Actions.SET_PAGE;
}

interface SetCurrentPage {
  type: typeof Actions.SET_CURRENT_PAGE;
  pageNumber: number;
}

interface SetShowingTeam {
  type: typeof Actions.SET_SHOWING_TEAM;
  showingTeam: Team;
}
interface SetError {
  type: typeof Actions.SET_ERROR;
  error: string;
}

export type TeamsReducerActions =
  | SetTeams
  | SetCurrentPage
  | SetPage
  | SetShowingTeam
  | ToggleIsFetching
  | SetError;
