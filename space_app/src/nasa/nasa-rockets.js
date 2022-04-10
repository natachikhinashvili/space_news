import sls from './sls.jpeg'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";
import transparentrocket from './sls-sticker.png'
import slsmissions from './sls-missions.png'

import './nasa.css'

export default function NasaRockets(){
    return (
        <div id='nasa-page-container'>
            <img alt='' id='sls-background' src={sls}/>
          <Link to='/'>
            <button id='back-from-nasa'>
               <AiOutlineArrowLeft size={30} color='#fff'/>
            </button>
          </Link>
            <header id='header'>
                <ul>
                  <li>
                    <a id='a' href="#overview">OVERVIEW</a>
                  </li>
                  <li>
                    <a id='a' href="#missions">MISSIONS</a>
                  </li>
                  <li>
                    <a id='a' target='_blank' rel="noreferrer" href="https://www.nasa.gov/exploration/systems/sls/fs/sls.html">OFFICIAL WEBSITE</a>
                  </li>
                </ul>
            </header>
            <body id='body'>
                <h1>SLS</h1>
                <i>ONLY ROCKET THAT CAN SEND ORION ASTRONAUTS AND CARGO DIRECTLY TO THE MOON ON A SINGLE MISSION</i>
            </body>
            <div id='missions'>
                <img src={slsmissions} id='sls-missions' alt='' />
                <h1 id='missions-title'>Space Launch System Missions</h1>
                <p id='missions-p'>Artemis I, the first integrated flight of SLS and Orion, uses the Block 1 configuration,
                which stands 322 feet, taller than the Statue of Liberty, and weighs 5.75 million lbs. During
                launch and ascent, SLS will produce 8.8 million lbs. of maximum thrust, 15 percent more thrust
                than the Saturn V rocket.For Artemis I, Block 1 will launch an uncrewed Orion spacecraft to
                an orbit 40,000 miles beyond the Moon, or 280,000 miles from Earth. This mission will demonstrate
                the integrated system performance of SLS, Orion, and Exploration Ground Systems prior to a crewed
                flight. The Artemis II mission will send astronauts on a flight to orbit the Moon. 
                These missions pave the way for landing astronauts on the Moon.</p>
            </div>
            <div id='overview'>
                <div id='title-table'>
                <p>SLS</p>
                <h1>OVERVIEW</h1>
                <div id='overview-props-container'>
                    <div id='overview-props'>
                        <p>weight</p>
                        <p>5.75 million lbs</p>
                    </div>
                    <div id='overview-props'>
                        <p>height</p>
                        <p>322 feet</p>
                    </div>
                    <div id='overview-props'>
                        <p>diameter</p>
                        <p>8.4 m</p></div>
                    <div id='overview-props'>
                        <p>first flight</p>
                        <p>June 2022</p>
                    </div>
                </div>
                </div>
                <img alt='' id='transparent-rocket' src={transparentrocket}/>
            </div>
        </div>
    )
}