import React from 'react';
import './HomeStyle.css';
import logo from '../logo.svg';

const Home = () => {
    return (
        <div className='home'>
            <div className="bar">
                <ul>
                    <li><a href="/"><img style={{ width: "300px" }} src={logo} alt="PointBlank" /></a></li>
                    <li><a href="/" id="heading">Live Score</a></li>
                </ul>
            </div>
            <div className="scoreboard">
                <table>
                    <tr>
                        <th id="Team1">
                            Team 01
                        </th>
                        <th id="Team 2">
                            Team 02
                        </th>
                    </tr>
                    <tr>
                        <td id="score1">
                            00
                        </td>
                        <td id="score2">
                            00
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default Home