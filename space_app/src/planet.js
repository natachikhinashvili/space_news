import planetsData from "./planets-data"
import './planet.css'
export default function Planet(planetname){
    let parsedData = JSON.parse(planetsData)
    const filtered=parsedData.filter(planet=> planet.name === planetname.planetname)
    return (
        <div id="planetpage">
            {filtered.map(planet => {
                return ( 
                    <div id="planetpage-planet-container">
                        <header id="planetpage-header">          
                            <h2 id='planetpage-title'>{planet.name}</h2>
                        </header>   
                        <div id="header-main">
                            <div id='planet-border'>
                                <div id="module">
                                    <img src={planet.img} alt='' className='planetpage-planetpic'/>
                                </div>
                            </div>
                            <p id='planetpage-planet-info'>{planet.fullinfo}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}