import './solar-system.css'

export default function SolarSystem(){
    return (
        <div id='solar-system'>
            <div class="proxz-nav">
                <div class="proxz-nav__system">
                  <li class="proxz-nav__orbit">
                    <a class="proxz-nav__satellite" href="#">
                      <span class="proxz-nav__label">Neptune
                      <span class="proxz-nav__description">The farthest-known Solar planet from the Sun.
                      </span>
                      </span>
                    </a>
                  </li>
                  <li class="proxz-nav__orbit">
                    <a class="proxz-nav__satellite" href="#">
                      <span class="proxz-nav__label">Uranus
                        <span class="proxz-nav__description">The first planet found with the aid of a telescope.
                        </span>
                      </span>
                    </a>
                  </li><li class="proxz-nav__orbit">
                    <a class="proxz-nav__satellite" href="#">
                      <span class="proxz-nav__label">saturn
                      <span class="proxz-nav__description">The only planet to have rings.
                      </span>
                      </span>
                    </a>
                  </li>
                  <li class="proxz-nav__orbit">
                    <a class="proxz-nav__satellite" href="#">
                      <span class="proxz-nav__label">jupiter
                        <span class="proxz-nav__description">The largest planet in the solar system.
                        </span>
                      </span>
                    </a>
                  </li><li class="proxz-nav__orbit">
                    <a class="proxz-nav__satellite" href="#">
                      <span class="proxz-nav__label">mars
                      <span class="proxz-nav__description">Dusty, cold, desert world with a very thin atmosphere.
                      </span>
                      </span>
                    </a>
                  </li>
                  <li class="proxz-nav__orbit">
                    <a class="proxz-nav__satellite" href="#">
                      <span class="proxz-nav__label">earth
                        <span class="proxz-nav__description">The only place in the known universe confirmed to host life.
                        </span>
                      </span>
                    </a>
                  </li>
                  <li class="proxz-nav__orbit">
                    <a class="proxz-nav__satellite" href="#">
                      <span class="proxz-nav__label">venus
                        <span class="proxz-nav__description">The hottest planet in our solar system.
                        </span>
                      </span>
                    </a>
                  </li>
                  <li class="proxz-nav__orbit">
                    <a class="proxz-nav__satellite" href="#">
                      <span class="proxz-nav__label">mercury
                        <span class="proxz-nav__description">The smallest planet in the Solar System.
                        </span>
                      </span>
                    </a>
                  </li>
                </div>
            </div>
        </div>
    )
}