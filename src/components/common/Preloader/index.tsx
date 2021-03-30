import React from 'react';
import s from './Preloader.module.scss';

const Preloader:React.FC = () => (
        <div className={s.cont}>
            <div className={s.ldsEllipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
);
export default Preloader;
