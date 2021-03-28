import { RouteComponentProps } from 'react-router';

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
  games: Array<Game>;
  totalGames: number;
  currentPage: number;
  isFetching: boolean;
  pageSize: number;
  startDate: Date;
  endDate: Date;
  error:string;
}
export interface TeamsState {
  teams: Array<Team>;
  totalTeams: number;
  currentPage: number;
  isFetching: boolean;
  pageSize: number;
  showingTeam: Team | null;
  error:string;
}

export interface GamesProps {
  games: Array<Game>;
  totalGames: number;
  currentPage: number;
  startDate: Date;
  endDate: Date;
  isFetching: boolean;
  error: string;
}

export interface TeamsProps {
  requestTeams: (currentPage: number, pageSize: number) => void;
  teams: Array<Team>;
  totalTeams: number;
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  error:string;
}

export interface TeamProps extends Team {
  isTeamPage: boolean
}

export interface TeamsContainerProps {
  teams: Array<Team>;
  totalTeams: number;
  currentPage: number;
  isFetching: boolean;
  pageSize: number;
  showingTeamId: number | null;
  showingTeam: Team | null;
  error:string;
  requestTeams: (currentPage: number, pageSize: number) => void;
  requestTeam: (teamId:string)=> void,
}
export interface TeamsRouteProps {
  teamId: string
}
