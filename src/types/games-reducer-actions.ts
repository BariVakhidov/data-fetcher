import { Actions } from '../redux/games-reducer';
import { Game } from './interfaces';

interface SetGames {
  type: typeof Actions.SET_GAMES;
  games: Array<Game>;
}

interface SetPage {
  type: typeof Actions.SET_PAGE;
}

interface SetCurrentPage {
  type: typeof Actions.SET_CURRENT_PAGE;
  pageNumber: number;
}
interface SetStartDate {
  type: typeof Actions.SET_START_DATE;
  startDate: Date;
}
interface SetEndDate {
  type: typeof Actions.SET_END_DATE;
  endDate: Date;
}
interface SetTotalGames {
  type: typeof Actions.SET_TOTAL_GAMES;
  totalGames: number;
}

interface ToggleIsFetching {
  type: typeof Actions.TOGGLE_IS_FETCHING;
  isFetching: boolean;
}
interface SetError {
  type: typeof Actions.SET_ERROR;
  error: string;
}

export type GamesReducerActions =
    | SetGames
    | SetCurrentPage
    | SetPage
    | SetTotalGames
    | ToggleIsFetching
    | SetStartDate
    | SetEndDate
    | SetError;
