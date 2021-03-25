import { dateConvertor, compare } from "../../../functions";
import React from "react";
import { NavLink } from "react-router-dom";
import { Game } from "../../../types/interfaces";
import s from "./Game.module.scss";

const GameComponent: React.FC<Game> = (props) => {

  let isHomeTeamWinner = compare(
    props.home_team_score,
    props.visitor_team_score
  );
  
  return (
    <div className={s.game}>
      <div className={s.gameCont}>
        <div className={s.gameTeams}> 
            <div
              className={s.side}
              style={{
                backgroundColor: isHomeTeamWinner
                  ? "rgb(153, 228, 153)"
                  : "rgb(250, 95, 95)",
              }}
            >
              <span><NavLink to={"/teams/" + props.home_team.id}>{props.home_team.full_name}</NavLink></span>
              <span>{props.home_team_score}</span>
            </div>
          :
          <div
            className={s.side}
            style={{
              backgroundColor: isHomeTeamWinner
                ? "rgb(250, 95, 95)"
                : "rgb(153, 228, 153)",
            }}
          >
           <NavLink to={'/teams/'+props.visitor_team.id}><span>{props.visitor_team.full_name}</span></NavLink>
            <span>{props.visitor_team_score}</span>
          </div>
          </div>
        <span>Status: {props.status}</span>
        <div className={s.dateCont}>
          <img
            src="../../../assets/images/calendar.png"
            alt=""
            height={20}
            style={{ marginRight: "10px" }}
          />
          <span>{dateConvertor(props.date)}</span>
        </div>
      </div>
    </div>
  );
};
export default GameComponent;
