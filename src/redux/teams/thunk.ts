import { teamsAPI } from '@API/api';
import { AppThunk, GetTeams } from '@Types/interfaces';
import { batch } from 'react-redux';
import {
  setCurrentPage,
  toggleIsFetching,
  setError,
  setTeams,
  setShowingTeam,
} from './action-creators';

export const requestTeams = (params: GetTeams): AppThunk => async (
  dispatch,
) => {
  dispatch(setCurrentPage(params.currentPage));
  dispatch(toggleIsFetching(true));
  try {
    const response = await teamsAPI.getTeams({
      currentPage: params.currentPage,
      pageSize: params.pageSize,
    });
    batch(() => {
      dispatch(
        setTeams({
          teamsItems: response.data.data,
          totalTeams: response.data.meta.totalCount,
        }),
      );
      dispatch(toggleIsFetching(false));
    });
  } catch (error) {
    batch(() => {
      dispatch(setError(error.message));
      dispatch(toggleIsFetching(false));
    });
  }
};

export const requestTeam = (teamId: string): AppThunk => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  try {
    const data = await teamsAPI.getTeam(teamId);
    batch(() => {
      dispatch(setShowingTeam(data));
      dispatch(toggleIsFetching(false));
    });
  } catch (error) {
    batch(() => {
      dispatch(setError(error.message));
      dispatch(toggleIsFetching(false));
    });
  }
};
