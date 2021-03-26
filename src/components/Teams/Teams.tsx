import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { TeamsProps } from '../../types/interfaces';
import Preloader from '../common/Preloader/Preloader';
import s from './Teams.module.scss';
import Pagination from '../common/Paginator/Pagination';
import TeamComponent from './Team/Team';

const Teams: React.FC<TeamsProps> = ({
  teamId,
  teams,
  isFetching,
  totalTeams,
  currentPage,
  requestTeams,
  requestTeam,
  showingTeam,
  error,
}) => {
  useEffect(() => {
    if (teamId !== undefined) {
      requestTeam(teamId);
    }
  }, [teamId]);

  if (teamId !== undefined && showingTeam !== null) {
    if (isFetching && showingTeam.id !== teamId) {
      return <Preloader />;
    } if (error) {
      return <div>{error}</div>;
    }
    return (
      <TeamComponent
        isTeamPage
        division={showingTeam.division}
        city={showingTeam.city}
        abbreviation={showingTeam.abbreviation}
        conference={showingTeam.abbreviation}
        fullName={showingTeam.fullName}
        id={showingTeam.id}
        name={showingTeam.name}
      />
    );
  }

  return (
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
};
export default Teams;
