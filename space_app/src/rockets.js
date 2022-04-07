import './rockets.css'

import NASA from './nasa.png'
import spacex from './spacex.png'
import { Link } from 'react-router-dom'

import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Rockets(){
    return (
        <div id="rockets-page">
            <Link to='/'>
                <button id='back-from-rockets'>
                   <AiOutlineArrowLeft size={30} color='#fff'/>
                </button>
            </Link>
            <header id='rockets-page-header'>
                    <h1 id='rockets-page-title'>Rockets</h1>
            </header>
            <div id='rocket-companies-container'>
                <Link to={'/rockets/nasa'} style={{ textDecoration: 'none', color: 'white'}}>
                    <div id='nasa-company-div'>
                        <img alt='' className='rocket-company-img' src={NASA}/>
                        <p id='nasa-company-div-title'>NASA</p>
                    </div>
                </Link>
                <Link to={'/rockets/spacex'} style={{ textDecoration: 'none',color: 'white'}}>
                <div id='spacex-company-div'>
                    <img alt='' className='rocket-company-img' src={spacex}/>
                    <p id='spacex-company-div-title'>SpaceX</p>
                </div>
                </Link>
            </div>
        </div>
    )
}