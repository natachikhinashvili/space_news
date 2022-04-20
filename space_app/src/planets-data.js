import mercury from './planets/mercury.png'
import venus from './planets/venus.png'
import earth from './planets/earth.png'
import mars from './planets/mars.png'
import jupiter from './planets/jupiter.png'
import saturn from './planets/saturn.png'
import uranus from './planets/uranus.png'
import neptune from './planets/neptune.png'

const PlanetsData = [
    {
      name: 'mercury',
      img: mercury,
      info: "The smallest planet in the Solar System.",
      fullinfo: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek god Hermes. Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, and its apparent distance from the Sun as viewed from Earth never exceeds 28°. This proximity to the Sun means the planet can only be seen near the western horizon after sunset or the eastern horizon before sunrise, usually in twilight."
    },
    {
      name: 'venus',
      img: venus,
      info: "The hottest planet in our solar system.",
      fullinfo: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be visible to the naked eye in broad daylight.Venus's orbit is smaller than that of Earth, but its maximal elongation is 47°; thus, it can be seen not only near the Sun in the morning or evening, but also a couple of hours before or after sunrise or sunset, depending on the observer's latitude and on the positions of Venus and the Sun. Most of the time, it can be seen either in the morning or in the evening. At some times, it may even be seen a while in a completely dark sky."
    },    
    {
      name: 'earth',
      img: earth,
      info: "The only place in the known universe confirmed to host life.",
      fullinfo: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large amounts of water can be found throughout the Solar System, only Earth sustains liquid surface water. About 71% of Earth's surface is made up of the ocean, dwarfing Earth's polar ice, lakes, and rivers. The remaining 29% of Earth's surface is land, consisting of continents and islands. Earth's surface layer is formed of several slowly moving tectonic plates, interacting to produce mountain ranges, volcanoes, and earthquakes. Earth's liquid outer core generates the magnetic field that shapes Earth's magnetosphere, deflecting destructive solar winds."
    },
    {
      name: 'mars',
      img: mars,
      info: "Dusty, cold, desert world with a very thin atmosphere.",
      fullinfo: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often called the \"Red Planet\".The latter refers to the effect of the iron oxide prevalent on Mars's surface, which gives it a striking reddish appearance in the sky. Mars is a terrestrial planet with a thin atmosphere, with surface features such as impact craters, valleys, dunes, and polar ice caps.Olympus Mons, the largest volcano and highest known mountain on any Solar System planet, and Valles Marineris, one of the largest canyons in the Solar System, are on Mars."
    },    
    {
      name: 'jupiter',
      img: jupiter,
      info: "The largest planet in the solar system.",
      fullinfo: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun. Jupiter is the third brightest natural object in the Earth's night sky after the Moon and Venus. People have been observing it since prehistoric times; it was named after the Roman god Jupiter, the king of the gods.Jupiter is primarily composed of hydrogen, but helium constitutes one-quarter of its mass and one-tenth of its volume. It likely has a rocky core of heavier elements but, like the other giant planets, Jupiter lacks a well-defined solid surface."
    },
    {
      name: 'saturn',
      img: saturn,
      info: "The only planet to have rings.",
      fullinfo: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.Saturn's interior is most likely composed of a core of iron–nickel and rock (silicon and oxygen compounds). Its core is surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium, and finally, a gaseous outer layer. Saturn has a pale yellow hue due to ammonia crystals in its upper atmosphere."
    },    
    {
      name: 'uranus',
      img: uranus,
      info: "The first planet found with the aid of a telescope.",
      fullinfo: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn). It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as \"ice giants\" to distinguish them from the other giant planets.As with gas giants, ice giants also lack a well defined \"solid surface.\""
    },
    {
      name: 'neptune',
      img: neptune,
      info: "The farthest-known Solar planet from the Sun.",
      fullinfo: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. It is referred to as one of the solar system's two ice giant planets (the other one being its near-twin Uranus).Like Jupiter and Saturn, Neptune's atmosphere is composed primarily of hydrogen and helium, along with traces of hydrocarbons and possibly nitrogen, though it contains a higher proportion of \"ices\" such as water, ammonia and methane."
    },
  ]
export default JSON.stringify(PlanetsData)