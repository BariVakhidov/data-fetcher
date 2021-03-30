import { TeamContainerProps, TeamsRouteProps } from '@Types/interfaces';
import { RouteComponentProps, withRouter } from 'react-router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@Redux/store';
import Preloader from '@Components/common/Preloader';
import { requestTeam } from '@Redux/teams/thunk';
import Team from './Team';

const TeamContainer:React.FC<TeamContainerProps & RouteComponentProps<TeamsRouteProps>> = ({
  match,
}) => {
  const { teamId } = match.params;
  const {
    showingTeam, isFetching, error,
  } = useSelector((state:RootState) => state.teams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestTeam(teamId));
  }, []);

  if (error) return <div>{error}</div>;

  return (
    isFetching || showingTeam === null || showingTeam.id !== parseInt(teamId) ? <Preloader />
      : (
        <Team
          isTeamPage
          division={showingTeam.division}
          city={showingTeam.city}
          abbreviation={showingTeam.abbreviation}
          conference={showingTeam.abbreviation}
          fullName={showingTeam.fullName}
          id={showingTeam.id}
          name={showingTeam.name}
        />
      )
  );
};

export default withRouter<RouteComponentProps<TeamsRouteProps>>(TeamContainer);
