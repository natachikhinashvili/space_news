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
            <div class="proxz-nav">
                <div class="proxz-nav__system">
                  {parsed.reverse().map((planet,i)  => {
                    return(
                      <div onClick={() => handleClick(planet.name)} class="proxz-nav__orbit">
                        <div class="proxz-nav__satellite">
                          <span class="proxz-nav__label">{planet.name}
                            <span class="proxz-nav__description">{planet.info}</span>
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