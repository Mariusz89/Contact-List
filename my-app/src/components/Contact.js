import React from 'react'

class Contact extends React.Component {
    render() {
        return (       
            <div className = {'contactItem'}>
                <div className = {"container"}> 
                    <ul className= {"social"}>
                        <li className= {"facebook"}><a href= {this.props.facebook} className= {"entypo-facebook"} target= {"_blank"}> </a></li>
                        <li className= {"twitter"}><a href= {this.props.twitter} className= {"entypo-twitter"} target= {"_blank"}> </a></li>
                        <li className= {"github"}><a href= {this.props.github} className= {"entypo-github"} target= {"_blank"}> </a></li>
                        <li className= {"skype"}><a href= {this.props.skype} className= {"entypo-skype"} target= {"_blank"}> </a></li>
                        <li className= {"linked-in"}><a href= {this.props.linkedin} className= {"entypo-linkedin"} target= {"_blank"}> </a></li>
                    </ul>
                </div> 
                <img className={'contactImage'} src={this.props.src} alt={this.props.alt} />
                <p className = {'contactLabel'}>
                    <span className = {'first_icon'}></span>
                    <span className = {'first1'}> Imię:</span> <span className = {'first3'}>{this.props.firstName} </span>
                </p> 
                <p className= {'contactLabel'}>
                    <span className = {'second_icon'}></span>
                    <span className = {'first1'}> Nazwisko:</span> <span className = {'first3'}>{this.props.lastName}</span> 
                </p>
                <p className= {'contactLabel'}>
                    <span className = {'third_icon'}></span>
                    <span className = {'first2'}>{this.props.email}</span>
                </p>
            </div>                
        )  
    }
}


export default Contact;