import './planetspreview.css'
import planetsData from './planets-data'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";
import React from 'react';
export default function Planetspreview(){

    return (
      <div id='planets-page'>
        <div id='planets'>
          <Link to='/'>
            <button id='back-from-rockets'>
               <AiOutlineArrowLeft size={30} color='#fff'/>
            </button>
          </Link>
          <div id="planet-container">
            {planetsData.map((planet, index)=> {
              return ( 
                <React.Fragment key={index}>
                  <div className='filterbox'>
                    <Link to={'/planets/' + planet.name} style={{textDecoration: 'none', color: 'white'}}>                   
                      <div id='planet-info-container'>
                        <h2 id='planet-name'>{planet.name}</h2>
                        <img src={planet.img} alt='' className='planet'/>
                        <p id='planet-info'>{planet.info}</p>
                      </div>
                    </Link>
                  </div>
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>
    )
}