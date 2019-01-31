import React from 'react';
import {Link} from 'react-router-dom';
import './navigation.css';

export default function Navigation(props){
    return(
        <div className='nav-panel'>
            <Link to='/about' className='button'>About </Link>
            <Link to='/projects' className='button'>Projects</Link>
            <Link to='/experience' className='button'>Experience</Link>
            <Link to='/contact' className='button'>Contact</Link>
        </div>
    )
}
