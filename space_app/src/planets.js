import mercury from './planets/mercury.png'
import venus from './planets/venus.png'
import earth from './planets/earth.png'
import mars from './planets/mars.png'
import jupiter from './planets/jupiter.png'
import saturn from './planets/saturn.png'
import uranus from './planets/uranus.png'
import neptune from './planets/neptune.png'
import './planetspreview.css'
export default function Planetspreview(){
    const planets = [
        {
          name: 'mercury',
          img: mercury,
          info: "Mercury is the smallest planet in the Solar System and the closest\
                 to the Sun. Its orbit around the Sun takes 87.97 Earth days, the \
                 shortest of all the Sun\'s planets."
        },
        {
          name: 'venus',
          img: venus,
          info: "Venus is the second planet from the Sun and Earth's closest planetary\
                neighbor. Even though Mercury is closer to the Sun, Venus is the hottest\
                planet in our solar system. Its thick atmosphere is full of the greenhouse\
                gas carbon dioxide, and it has clouds of sulfuric acid."
        },    
        {
          name: 'earth',
          img: earth,
          info: "The third planet from the sun, Earth is the only place in the known universe\
                confirmed to host life. With a radius of 3,959 miles, Earth is the fifth largest\
                planet in our solar system, and it's the only one known for sure to have liquid\
                water on its surface. Earth is also unique in terms of monikers."
        },
        {
          name: 'mars',
          img: mars,
          info: "Mars is the fourth planet from the Sun - a dusty, cold, desert world with a very\
                thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons,\
                extinct volcanoes, and evidence that it was even more active in the past."
        },    
        {
          name: 'jupiter',
          img: jupiter,
          info: "Jupiter is the fifth planet from our Sun and is, by far, the largest planet in the\
                solar system - more than twice as massive as all the other planets combined. Jupiter's\
                stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an\
                atmosphere of hydrogen and helium."
        },
        {
          name: 'saturn',
          img: saturn,
          info: "Saturn is the sixth planet from the Sun and the second-largest planet in our solar system.\
                Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium. \
                Saturn is not the only planet to have rings, but none are as spectacular or as complex as Saturn's.\
                Saturn also has dozens of moons."
        },    
        {
          name: 'uranus',
          img: uranus,
          info: "Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar\
                system. It was the first planet found with the aid of a telescope, Uranus was discovered in\
                1781 by astronomer William Herschel, although he originally thought it was either a comet or a star."
        },
        {
          name: 'neptune',
          img: neptune,
          info: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System,\
                it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest\
                giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin\
                Uranus."
        },
      ]
    return (
        <div id='planets'>
          {planets.map((planet)=> {
            return ( 
              <div id="planet-container">
                <img src={planet.img} alt='' className='planet'/>
                <div id='planet-info-container'>
                  <h2 id='planet-name'>{planet.name}</h2>
                  <p id='planet-info'>{planet.info}</p>
                <button id='seemore-btn'>see more</button>
                </div>
              </div>
            )
          })}
        </div>
    )
}