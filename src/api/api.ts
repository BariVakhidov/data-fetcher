import { URLS } from '@/constants';
import { AxiosResponse } from 'axios';
import * as qs from 'qs';
import { GetGamesResponse, GetTeamsResponse } from '../types/api-response';
import { GetGamesParams, GetTeams, Team } from '../types/interfaces';
import { instance } from './axios-instance';

export const gamesAPI = {
  getGames({
    currentPage, pageSize, startDate, endDate,
  }:GetGamesParams):Promise<AxiosResponse<GetGamesResponse>> {
    return instance.get<GetGamesResponse>(
      `${URLS.GAMES}?${qs.stringify({
        page: currentPage,
        per_page: pageSize,
        start_date: startDate,
        end_date: endDate,
      })}`,
    );
  },
};

export const teamsAPI = {
  getTeams({ currentPage, pageSize }:GetTeams):Promise<AxiosResponse<GetTeamsResponse>> {
    return instance.get<GetTeamsResponse>(
      `${URLS.TEAMS}?${qs.stringify({
        page: currentPage,
        per_page: pageSize,
      })}`,
    );
  },
  getTeam(id: string):Promise<Team> {
    return instance.get<Team>(`${URLS.TEAMS}/${id}`).then((response) => response.data);
  },
};
