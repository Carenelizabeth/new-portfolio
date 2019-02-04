import React from 'react';
import ExperienceCard from './experience-card';
import './experience.css';

export default class Experience extends React.Component{

    render(){
        let stantech = <StanTechTop />;
        return(
            <div className='container'>
                <div className='card-wrapper'>
                    <ExperienceCard
                        logo={require('../assets/logo-white.png')}
                        logoAlt='Artist Connect'
                        image={require('../assets/startup-weekend.png')}
                        title='1st Place Startup Weekend'
                        p1='I had the opportunity to be the only developer on an amazing team of artists and entrepreneurs.'
                        p2='Over about two days, I built out a demo of our space and gear sharing platform for all kinds of artists.'
                        a1='https://www.reviewjournal.com/business/entrepreneurs/artist-connect-takes-first-place-at-startup-weekend-las-vegas-2018-1531226/'
                        a1Text='News Article'
                        a2='http://www.artistconnect.co/'
                        a2Text='Prototype'

                    />
                    <ExperienceCard 
                        logo={require('../assets/stantech-logo.png')}
                        logoAlt='StanTech'
                        title='Complete Site Redesign'
                        topContent={stantech}
                        p1='I’ve been asked to do a complete redesign of the StanTech website. The commission is to “make it pop.”'
                        p2="Since that's rather vague, I am currently prototyping a series of animations to use on the landing page. The rest of the site will be themed off the initial design."
                        a1='https://carenelizabeth.github.io/stantech-ideas/'
                        a1Text='Idea demo'
                        a2='https://github.com/Carenelizabeth/stantech-ideas'
                        a2Text='Respository'
                    />
                    <ExperienceCard 
                        logo={require('../assets/ck-logo.png')}
                        logoAlt='Caren Keyes original portfolio'
                        title='Original Portfolio Site'
                        image={require('../assets/portfolio.png')}
                        p1='This was my original portfolio site.'
                        p2='The design is subdued, but I used the opportunity to optimize for responsive design. The header images change and move responsively to match device screens.'
                        a1='https://carenelizabeth.github.io/my-portfolio/'
                        a1Text='website'
                        a2='https://github.com/Carenelizabeth/my-portfolio'
                        a2Text='repository'
                    />
                    <ExperienceCard 
                        logo={require('../assets/rentartstufflogo2.png')}
                        logoAlt='Rent Art Stuff'
                        title='Rent Art Stuff MVP'
                        image={require('../assets/artstuff.png')}
                        p1='I am currently working on a full-featured size for the company that emerged from startup weekend using Mongo, Express, React and Node.'
                        p2='Completed features include a multi-step form for uploading listings and complex user profiles. Currently working on scheduling and reservation systems.'
                        a1='https://github.com/Carenelizabeth/arts-client'
                        a1Text='client-side repository'
                    />

                </div>
            </div>
        )
    }
}


const StanTechTop = () => {
    return(
        <div className='stantech-top'>
            <div className='plant-animation'></div>
        </div>
    )
}

