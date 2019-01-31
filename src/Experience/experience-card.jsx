import React from 'react';

export default class ExperienceCard extends React.Component{
    constructor(){
        super()
        this.state = {
            showBack: false
        }
    }

     render(){
        let image = this.props.image? <img src={this.props.image} alt={this.props.title}/> : null;

        return(
            <div className='outside-wrapper'>
                <div className='experience-card-container'>
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
                            {this.props.content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




