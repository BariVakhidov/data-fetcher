import React, { useEffect } from "react";
import { TeamsProps } from "../../types/interfaces";
import Preloader from "../common/Preloader/Preloader";
import s from "./Teams.module.scss";
import Pagination from "../common/Paginator/Pagination";
import { NavLink } from "react-router-dom";
import TeamComponent from "./Team/Team";

const Teams: React.FC<TeamsProps> = ({
  teamId,
  teams,
  isFetching,
  totalTeams,
  currentPage,
  requestTeams,
  requestTeam,
  showingTeam,
  showingTeamId,
  error
}) => {
  useEffect(() => {
    if (teamId !== undefined) {
    requestTeam(teamId);
    }
  }, [teamId]);
  
  if (teamId !== undefined && showingTeam !== null) {
    return (
      (isFetching && showingTeam.id !== teamId) ? <Preloader/> : (error ?  <div>{error}</div> : <TeamComponent isTeamPage={true} {...showingTeam} />)
    );
  }
  
  else
    return (
      <div className={s.teams}>
        <span className={s.title}>Teams</span>
        {error ? <div>{error}</div> : <div className={s.teamsContainer}>
          {isFetching  ? <Preloader /> : teams.map((team) => (
            <NavLink to={"/teams/" + team.id} key={team.id}>
              <TeamComponent isTeamPage={false} {...team} />
            </NavLink>
          ))}
        </div>}
        <Pagination
          totalItems={totalTeams}
          pageSize={8}
          currentPage={currentPage}
          onPageChange={(currentPage) => requestTeams(currentPage, 8)}
        />
      </div>
    );
};
export default Teams;
