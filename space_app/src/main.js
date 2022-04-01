import Star from './star';
import Planetspreview from './planets.js';
import './main.css'

export default function Main(){
    return (
        <div>
            <header className="App-header">
              <h1>Space app</h1>
            </header>
            <body id='app-body'>
              <Star/>
              <Planetspreview/>
            </body>
        </div>
    )
}