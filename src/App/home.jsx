import React from 'react';
import {Redirect} from 'react-router-dom';

export default function Home(props){
    return(
        <Redirect from='/' to='/projects' />
    )
}