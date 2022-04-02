import { useParams } from "react-router-dom"
import planetsData from "./planets-data"
import './planet.css'
export default function Planet(){
    const slug = useParams()
    const filtered=planetsData.filter(planet=> planet.name === slug.name)
    return (
        <div id="planetpage">
            {filtered.map(planet => {
                return ( 
                    <div id="planetpage-planet-container">
                        <header>          
                            <h2 id='planetpage-title'>{planet.name}</h2>
                        </header>   
                        <div id="header-main">
                            <img src={planet.img} alt='' className='planetpage-planetpic'/>
                            <p id='planetpage-planet-info'>{planet.info}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}