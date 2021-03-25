export interface Team {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

export interface Game {
  id: number;
  date: string;
  home_team_score: number;
  visitor_team_score: number;
  season: number;
  period: number;
  status: string;
  time: string;
  postseason: boolean;
  home_team: Team;
  visitor_team: Team;
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
  showingTeamId: number | null;
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

export interface TeamsProps extends TeamsState {
  requestTeams: (currentPage: number, pageSize: number) => void;
  teamId:number | undefined,
  requestTeam: (teamId:number)=> void
}

export interface TeamProps extends Team {
  isTeamPage: boolean
}
