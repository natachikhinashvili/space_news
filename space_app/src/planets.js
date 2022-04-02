import './planetspreview.css'
import planetsData from './planets-data'
import { Link } from 'react-router-dom'
export default function Planetspreview(){

    return (
        <div id='planets'>
          {planetsData.map((planet)=> {
            return ( 
              <div id="planet-container">
                <img src={planet.img} alt='' className='planet'/>
                <div id='planet-info-container'>
                  <h2 id='planet-name'>{planet.name}</h2>
                  <p id='planet-info'>{planet.info}</p>
                  <Link to={'/planets/' + planet.name}>
                <button id='seemore-btn'>see more</button>
                </Link>
                </div>
              </div>
            )
          })}
        </div>
    )
}