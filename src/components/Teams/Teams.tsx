import React from 'react';
import { NavLink } from 'react-router-dom';
import { TeamsProps } from '../../types/interfaces';
import s from './Teams.module.scss';
import Pagination from '../common/Paginator/Pagination';
import TeamComponent from './Team/Team';
import Preloader from '../common/Preloader/Preloader';

const Teams: React.FC<TeamsProps> = ({
  teams,
  isFetching,
  totalTeams,
  currentPage,
  requestTeams,
  error,
}) => (
  <div className={s.teams}>
    <span className={s.title}>Teams</span>
    {error ? <div>{error}</div> : (
      <div className={s.teamsContainer}>
        {isFetching ? <Preloader /> : teams.map((team) => (
          <NavLink to={`/teams/${team.id}`} key={team.id}>
            <TeamComponent
              isTeamPage={false}
              division={team.division}
              city={team.city}
              abbreviation={team.abbreviation}
              conference={team.abbreviation}
              fullName={team.fullName}
              id={team.id}
              name={team.name}
            />
          </NavLink>
        ))}
      </div>
    )}
    <Pagination
      totalItems={totalTeams}
      pageSize={8}
      currentPage={currentPage}
      onPageChange={(currentPageNumber:number) => requestTeams(currentPageNumber, 8)}
    />
  </div>
);
export default Teams;
