import { Actions } from '@Redux/games/constants';
import { GetGames } from '@Types/api-response';

interface SetGames {
  type: typeof Actions.SET_GAMES;
  payLoad: GetGames
}

interface SetPage {
  type: typeof Actions.SET_PAGE;
}

interface SetCurrentPage {
  type: typeof Actions.SET_CURRENT_PAGE;
  payLoad: number;
}
interface SetStartDate {
  type: typeof Actions.SET_START_DATE;
  payLoad: Date;
}
interface SetEndDate {
  type: typeof Actions.SET_END_DATE;
  payLoad: Date;
}
interface ToggleIsFetching {
  type: typeof Actions.TOGGLE_IS_FETCHING;
  payLoad: boolean;
}
interface SetError {
  type: typeof Actions.SET_ERROR;
  payLoad: string;
}

export type GamesReducerActions =
    | SetGames
    | SetCurrentPage
    | SetPage
    | ToggleIsFetching
    | SetStartDate
    | SetEndDate
    | SetError;
