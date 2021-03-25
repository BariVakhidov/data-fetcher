import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from "react-router";
import { TeamsState } from "../../types/interfaces";
import { AppDispatch, RootState } from "../../redux/store";
import {
  requestTeam,
  requestTeams,
  setShowingTeamId,
} from "../../redux/teams-reducer";
import Teams from "./Teams";

const TeamsContainer = ({
  match,
  teams,
  totalTeams,
  currentPage,
  pageSize,
  showingTeam,
  isFetching,
  requestTeams,
  requestTeam,
  showingTeamId,
  error
}) => {
  let teamId: number | undefined = match.params.teamId;

  useEffect(() => {
    if (teams.length === 0 && !teamId) requestTeams(currentPage, 8);
  }, [teamId]);

  return (
    <Teams
      teamId={teamId}
      teams={teams}
      showingTeam={showingTeam}
      showingTeamId={showingTeamId}
      isFetching={isFetching}
      currentPage={currentPage}
      totalTeams={totalTeams}
      requestTeams={requestTeams}
      pageSize={pageSize}
      requestTeam = {requestTeam}
      error= {error}
    />
  );
};

let mapStateToProps = (state: RootState): TeamsState => {
  return {
    teams: state.teams.teams,
    totalTeams: state.teams.totalTeams,
    currentPage: state.teams.currentPage,
    isFetching: state.teams.isFetching,
    showingTeamId: state.teams.showingTeamId,
    showingTeam: state.teams.showingTeam,
    pageSize: 10,
    error: state.teams.error
  };
};

const TeamsContWhithRouter = withRouter<RouteComponentProps>(TeamsContainer);

export default connect<TeamsState>(mapStateToProps, {
  requestTeams,
  requestTeam,
  setShowingTeamId,
})(TeamsContWhithRouter);
