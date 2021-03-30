import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@Redux/store';
import {
  requestTeams,
} from '@Redux/teams/thunk';
import { GetTeams } from '@Types/interfaces';
import TeamsList from './TeamsList';

const TeamsListContainer:React.FC = () => {
  const {
    teamsItems,
    totalTeams,
    currentPage,
    pageSize,
    error,
    isFetching,
  } = useSelector((state:RootState) => state.teams);
  const dispatch = useDispatch();
  const onRequestTeams = (params:GetTeams) => {
    dispatch(requestTeams(params));
  };
  return (
    <TeamsList
      teamsItems={teamsItems}
      currentPage={currentPage}
      totalTeams={totalTeams}
      requestTeams={onRequestTeams}
      pageSize={pageSize}
      error={error}
      isFetching={isFetching}
    />
  );
};

export default TeamsListContainer;
