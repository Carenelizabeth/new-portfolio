import React from 'react';

export default class ProjectCard extends React.Component{
    constructor(){
        super()
        this.state = {
            showBack: false
        }
    }

    flipBack = () => {
        this.setState({showBack: true})
        console.log('back')
    }

    flipFront = () => {
        this.setState({showBack: false})
        console.log('front')
    }

    render(){
        let parentDivClass = this.state.showBack? 'project-card-container show-back': 'project-card-container'
        return(
            <div className={parentDivClass}>
                <div className={`project-card ${this.props.className}`}>
                    <div className='project-card-front'>
                        <img src={this.props.image} alt={this.props.alt}/>
                    </div>
                    <div className='project-card-back'>
                        <div className='project-title'>
                            <h3>{this.props.title}</h3>
                        </div>
                        <div className='project-links'>
                            <a href={this.props.github} target='blank' rel='noopener noreferrer' 
                                className='github-link image-link'
                                onFocus={this.flipBack}
                                onBlur={this.flipFront}                            
                            >
                                Github
                            </a>
                            <a href={this.props.live} target='blank' rel='noopener noreferrer' 
                                onFocus={this.flipBack}
                                onBlur={this.flipFront}
                            >VIEW IT LIVE</a>
                        </div>
                        <div className='project-text'>
                            <p>{this.props.text}</p>
                        </div>
                        <div className='project-stack'>
                            <img src={this.props.stackURL} alt={`${this.props.title} stack`}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}