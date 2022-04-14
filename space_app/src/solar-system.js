import './solar-system.css'
import { Link } from 'react-router-dom'
import PlanetsData from './planets-data'

export default function SolarSystem(){
  let parsed = JSON.parse(PlanetsData)
    return (
        <div id='solar-system'>
            <div class="proxz-nav">
                <div class="proxz-nav__system">
                  {parsed.reverse().map((planet,i)  => {
                    return(
                      <Link to={'/planets/' + planet.name}class="proxz-nav__orbit">
                        <div class="proxz-nav__satellite">
                          <span class="proxz-nav__label">{planet.name}
                            <span class="proxz-nav__description">{planet.info}</span>
                          </span>
                        </div>
                      </Link>
                    )
                  })
                  }
                </div>
            </div>
        </div>
    )
}