import React from "react";
import { TeamProps } from "../../../types/interfaces";
import s from "./Team.module.scss";
import cn from "classnames";

const TeamComponent: React.FC<TeamProps> = (props) => {
  return (
    <div className={cn(props.isTeamPage? s.teamPage : s.team)}>
      <div className={s.teamCont}>
        <span className={s.name}>{props.full_name}</span>
        <div className={s.city}>
          <img src="../../assets/images/city.png" alt="" height={15} />
          <span>{props.city}</span>
        </div>
        {props.isTeamPage && (
          <div className={s.additionalInf}>
            <span>Division: {props.division}</span>
            <span>Abbreviation: {props.abbreviation}</span>
            <span>Conference: {props.conference}</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default TeamComponent;
