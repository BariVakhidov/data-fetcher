import React from 'react';
import cn from 'classnames';
import { TeamProps } from '@Types/interfaces';
import s from './Team.module.scss';

const Team: React.FC<TeamProps> = ({
  isTeamPage, fullName, city, division, abbreviation, conference,
}) => (
  <div className={cn(isTeamPage ? s.teamPage : s.team)}>
    <div className={s.teamCont}>
      <span className={s.name}>{fullName}</span>
      <div className={s.city}>
        <img src="../../assets/images/city.png" alt="" height={15} />
        <span>{city}</span>
      </div>
      {isTeamPage && (
      <div className={s.additionalInf}>
        <span>
          Division:
          {division}
        </span>
        <span>
          Abbreviation:
          {abbreviation}
        </span>
        <span>
          Conference:
          {conference}
        </span>
      </div>
      )}
    </div>
  </div>
);
export default Team;
