import React from 'react';
import { NavLink } from 'react-router-dom';

const WorkPage = () => (
    <div className="content-container">
        <NavLink className="content-item" id="spacejpg" to="/spacejpg" exact={true}>
            <div className="content-item__img">
                <img src="./images/space.jpg" />
            </div>
            <h2 className="title">@spacejpg</h2>
        </NavLink>
        <NavLink className="content-item" id="calmcorner" to="/calm-corner" exact={true}>
            <div className="content-item__img">
                <img src="./images/calmcorner.gif" />
            </div>
            <h2 className="title">Calm Corner</h2>
        </NavLink>
        <NavLink className="content-item" id="ftb" to="/expenselog" exact={true}>
            <div className="content-item__img">
                <img src="./images/ftb.png" />
            </div>
            <h2 className="title">Expense Log</h2>
        </NavLink>
    </div>
);
export default WorkPage;