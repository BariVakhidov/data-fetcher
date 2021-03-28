import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { TeamsContainerProps, TeamsRouteProps, TeamsState } from '../../types/interfaces';
import { RootState } from '../../redux/store';
import {
  requestTeam,
  requestTeams,
  setShowingTeamId,
} from '../../redux/teams-reducer';
import Teams from './Teams';
import TeamComponent from './Team/Team';
import Preloader from '../common/Preloader/Preloader';

const TeamsContainer:React.FC<TeamsContainerProps> = ({
  match,
  teams,
  totalTeams,
  currentPage,
  pageSize,
  showingTeam,
  isFetching,
  requestTeams,
  requestTeam,
  error,
}) => {
  const { teamId } = match.params;

  useEffect(() => {
    if (teams.length === 0 && !teamId) requestTeams(currentPage, 8);
    if (teamId) {
      if (showingTeam === null) requestTeam(teamId);
      else if (showingTeam.id !== parseInt(teamId)) {
        requestTeam(teamId);
      }
    }
  }, [teamId]); // teams and team request

  if (teamId) { // если кликнули на команду
    if (isFetching || showingTeam === null) return <Preloader />;
    if (showingTeam !== null && showingTeam.id !== parseInt(teamId)) return <Preloader />;
    if (error) return <div>{error}</div>;
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
    <Teams
      teams={teams}
      currentPage={currentPage}
      totalTeams={totalTeams}
      requestTeams={requestTeams}
      pageSize={pageSize}
      error={error}
      isFetching={isFetching}
    />
  );
};

const mapStateToProps = (state: RootState): TeamsState => ({
  teams: state.teams.teams,
  totalTeams: state.teams.totalTeams,
  currentPage: state.teams.currentPage,
  isFetching: state.teams.isFetching,
  showingTeamId: state.teams.showingTeamId,
  showingTeam: state.teams.showingTeam,
  pageSize: 10,
  error: state.teams.error,
});

const TeamsContWhithRouter = withRouter<RouteComponentProps<TeamsRouteProps>>(TeamsContainer);

export default connect<TeamsState>(mapStateToProps, {
  requestTeams,
  requestTeam,
  setShowingTeamId,
})(TeamsContWhithRouter);
