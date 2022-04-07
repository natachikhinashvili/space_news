import { useParams } from "react-router-dom"
import planetsData from "./planets-data"
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";
import './planet.css'
export default function Planet(){
    const slug = useParams()
    const filtered=planetsData.filter(planet=> planet.name === slug.name)
    return (
        <div id="planetpage">
        <Link to='/planets'>
          <button id='back-from-rockets'>
             <AiOutlineArrowLeft size={30} color='#fff'/>
          </button>
        </Link>
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
            <section class="stage">
                <figure class="ball"><span class="shadow"></span></figure>
            </section>
        </div>
    )
}