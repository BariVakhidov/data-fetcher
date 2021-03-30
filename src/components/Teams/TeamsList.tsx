import React, { useEffect } from 'react';
import { TeamsProps } from '@Types/interfaces';
import Pagination from '@Common/Paginator/Pagination';
import s from './Teams.module.scss';
import TeamsListWrapper from './TeamsListWrapper';

const Teams: React.FC<TeamsProps> = ({
  teamsItems,
  isFetching,
  totalTeams,
  currentPage,
  requestTeams,
  error,
}) => {
  useEffect(() => {
    if (teamsItems === null) requestTeams({ currentPage, pageSize: 8 });
  }, []);

  return (
    <div className={s.teams}>
      <span className={s.title}>Teams</span>
      <TeamsListWrapper error={error} teamsItems={teamsItems} isFetching={isFetching} />
      <Pagination
        totalItems={totalTeams}
        pageSize={8}
        currentPage={currentPage}
        onPageChange={
        (currentPageNumber:number) => requestTeams({ currentPage: currentPageNumber, pageSize: 8 })
      }
      />
    </div>
  );
};
export default Teams;
