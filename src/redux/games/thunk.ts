import { dateConvertorForAPI } from '@/functions';
import { gamesAPI } from '@API/api';
import { AppThunk, RequestGamesParams } from '@Types/interfaces';
import { batch } from 'react-redux';
import {
  setCurrentPage,
  toggleIsFetching,
  setError,
  setStartDate,
  setEndDate,
  setGames,
} from './action-creators';

export const requestGames = (params: RequestGamesParams): AppThunk => async (
  dispatch,
) => {
  batch(() => {
    dispatch(setCurrentPage(params.currentPage));
    dispatch(setStartDate(params.startDate));
    dispatch(setEndDate(params.endDate));
    dispatch(toggleIsFetching(true));
  });
  try {
    const response = await gamesAPI.getGames({
      currentPage: params.currentPage,
      pageSize: params.pageSize,
      startDate: dateConvertorForAPI(params.startDate),
      endDate: dateConvertorForAPI(params.endDate),
    });
    batch(() => {
      dispatch(
        setGames({
          gamesItems: response.data.data,
          totalGames: response.data.meta.totalCount,
        }),
      );
      dispatch(toggleIsFetching(false));
    });
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(toggleIsFetching(false));
  }
};
