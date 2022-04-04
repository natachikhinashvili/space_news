import './main.css'

import { Link } from 'react-router-dom';

export default function Main(){
    return (
        <div className='App'>
          <header className="App-header">
            <h1 id='landingpage-title'>Space app</h1>
          </header>
          <div>
            <Link className='link-to-page' to={'/rockets'}>
              <h2 id='choose-rockets' className='choose'>rockets</h2>
            </Link>
            <Link className='link-to-page' to={'/planets'}>
              <h2 id='choose-rockets' className='choose'>planets</h2>
            </Link>
          </div>
        </div>
    )
}