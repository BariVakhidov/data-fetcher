import { GetGamesResponse, GetTeamsResponse } from "../types/api-response";
import { Team } from "../types/interfaces";
import { instance } from "./axios-instance";

export const gamesAPI = {
  getGames(
    currentPage: number,
    pageSize: number,
    startDate: string,
    endDate: string
  ) {
    return instance.get<GetGamesResponse>(
      `games?page=${currentPage}&per_page=${pageSize}&start_date=${startDate}&end_date=${endDate}`
    );
  },
};

export const teamsAPI = {
  getTeams(currentPage: number, pageSize: number) {
    return instance.get<GetTeamsResponse>(
      `teams?page=${currentPage}&per_page=${pageSize}`
    );
  },
  getTeam(id: number) {
    return instance.get<Team>(`teams/${id}`).then((response) => response.data);
  },
};
