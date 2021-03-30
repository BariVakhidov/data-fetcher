import { RootState } from '@Redux/store';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

export interface Team {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  fullName: string;
  name: string;
}

export interface Game {
  id: number;
  date: string;
  homeTeamScore: number;
  visitorTeamScore: number;
  season: number;
  period: number;
  status: string;
  time: string;
  postseason: boolean;
  homeTeam: Team;
  visitorTeam: Team;
}

export interface GamesState {
  gamesItems: Array<Game>;
  totalGames: number;
  currentPage: number;
  isFetching: boolean;
  pageSize: number;
  startDate: Date;
  endDate: Date;
  error:string;
}
export interface TeamsState {
  teamsItems: Array<Team>;
  totalTeams: number;
  currentPage: number;
  isFetching: boolean;
  pageSize: number;
  showingTeam: Team;
  error:string;
}

export interface GamesProps {
  gamesItems: Array<Game>;
  totalGames: number;
  currentPage: number;
  startDate: Date;
  endDate: Date;
  isFetching: boolean;
  error: string;
}

export interface TeamsProps {
  requestTeams: (params:GetTeams) => void;
  teamsItems: Array<Team>;
  totalTeams: number;
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  error:string;
}

export interface TeamProps extends Team {
  isTeamPage: boolean
}

export interface TeamsListContainerProps {
  teamsItems: Array<Team>;
  totalTeams: number;
  currentPage: number;
  isFetching: boolean;
  pageSize: number;
  showingTeam: Team;
  error:string;
  requestTeams: (params:GetTeams) => void;
}
export interface TeamsRouteProps {
  teamId: string
}

export interface TeamContainerProps {
  isFetching: boolean;
  showingTeam: Team;
  error:string;
  requestTeam: (teamId:string)=> void,
}
export interface GetGamesParams {
  currentPage: number,
  pageSize: number,
  startDate: string,
  endDate: string,
}
export interface RequestGamesParams {
  currentPage: number,
  pageSize: number,
  startDate: Date,
  endDate: Date,
}
export interface GetTeams {
  currentPage: number;
  pageSize: number;
}
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
RootState,
unknown,
Action<string>>;

export interface TeamsListWrapperProps {
  teamsItems: Array<Team>,
  isFetching:boolean,
  error:string,
}
export interface PaginationProps {
  portionSize?: number;
  totalItems: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
export interface GamesListWrapperProps {
  gamesItems: Array<Game>,
  isFetching:boolean,
  error: string,
}
