import { Game, Team } from './interfaces';

export interface GetGamesResponse {
  data: Array<Game>;
  meta: {
    totalPages: number,
    currentPage: number,
    nextPage: number | null,
    perPage: number,
    totalCount: number
  }
}

export interface GetTeamsResponse {
  data: Array<Team>;
  meta: {
    totalPages: number,
    currentPage: number,
    nextPage: number | null,
    perPage: number,
    totalCount: number
  }
}
