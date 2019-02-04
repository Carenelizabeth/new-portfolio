import React from 'react';

export default class ExperienceCard extends React.Component{
    constructor(){
        super()
        this.state = {
            showBack: false
        }
    }

    flipBack = () => {
        this.setState({showBack: true})
    }

    flipFront = () => {
        this.setState({showBack: false})
    }

    render(){
        let image = this.props.image? <img src={this.props.image} alt={this.props.title}/> : null;
        let parentDivClass = this.state.showBack? 'experience-card-container show-back': 'experience-card-container';
        return(
            <div className='outside-wrapper'>
                <div className={parentDivClass}>
                    <div className='experience-card'>     
                        <div className='card-front'>
                            <div className='card-topper'>
                                <img src={this.props.logo} alt={this.props.logoAlt} />
                            </div>
                            <div className='card-intro'>
                                {image}
                                {this.props.topContent}
                                <div className='card-title'>
                                    <h3>{this.props.title}</h3>
                                </div>
                            </div>
                        </div>
                        <div className='card-back'>
                            <div className='card-title-back'>
                                <h3>{this.props.title}</h3>
                            </div>
                            <div className='card-back-text'>
                                <p>{this.props.p1}</p>
                                <p>{this.props.p2}</p>
                            </div>
                            <div className='card-links'> 
                                <p>
                                    <a href={this.props.a1}
                                        target='_blank' rel='noopener noreferrer'
                                        onFocus={this.flipBack}
                                        onBlur={this.flipFront}
                                    >{this.props.a1Text}</a>
                                </p>
                                <p>
                                    <a href={this.props.a2}
                                        target='_blank' rel='noopener noreferrer'
                                        onFocus={this.flipBack}
                                        onBlur={this.flipFront}
                                    >{this.props.a2Text}</a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}






