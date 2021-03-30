import { TeamsListWrapperProps } from '@Types/interfaces';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '@Common/Preloader';
import s from './Teams.module.scss';
import Team from './Team/Team';

const TeamsListWrapper:React.FC<TeamsListWrapperProps> = ({
  teamsItems,
  isFetching,
  error,
}) => {
  if (error) return <div>{error}</div>;
  return (
    <div className={s.teamsContainer}>
      {isFetching || teamsItems === null ? <Preloader /> : teamsItems.map((team) => (
        <NavLink to={`/teams/${team.id}`} key={team.id}>
          <Team
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
  );
};

export default TeamsListWrapper;
