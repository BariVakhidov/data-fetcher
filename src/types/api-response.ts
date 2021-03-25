import { Game, Team } from "./interfaces";

export interface GetGamesResponse {
    data: Array<Game>;
    meta: {
      total_pages: number,
      current_page: number,
      next_page: number | null,
      per_page: number,
      total_count: number
    }
  }
  
  export interface GetTeamsResponse {
    data: Array<Team>;
    meta: {
      total_pages: number,
      current_page: number,
      next_page: number | null,
      per_page: number,
      total_count: number
    }
  }
  