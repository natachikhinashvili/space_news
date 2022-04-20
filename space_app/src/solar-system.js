import './solar-system.css'
import { useState } from 'react'
import PlanetsData from './planets-data'
import Planet from './planet'

export default function SolarSystem(){
  let parsed = JSON.parse(PlanetsData)

  const [opened, setopened] = useState(false)
  const [planet, setplanet] = useState('')
  function handleClick(planetname){
    setopened(prevstate => !prevstate)
    setplanet(planetname)
  }
    return (
        <div id='solar-system'>
            <div class="solar-system-container">
                <div className="solar-system">
                  {parsed.reverse().map((planet,i)  => {
                    return(
                      <div onClick={() => handleClick(planet.name)} className="orbit">
                        <div className="satellite">
                          <span className="planet-name">{planet.name}
                            <span className="planet-info">{planet.info}</span>
                          </span>
                        </div>
                      </div>
                    )
                  })
                  }
                </div>
            </div>
            <div className={opened ? 'modal' : 'closedmodal'}>
              <button onClick={handleClick} id='close-btn'>X</button>
              <Planet planetname={planet}/>
            </div>
        </div>
    )
}