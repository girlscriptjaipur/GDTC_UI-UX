import React from 'react';
import '../stylesheets/TextArea.css';

class TextArea extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date().toLocaleString('en-us', 
            {month: 'long', day: 'numeric', year: 'numeric'})
        };
    }
    render(){
        return(
          <div className="text-block">  
            <h1 className="header">Hello Dribbble !</h1>
            <div className="paragraph">
                <p>Very glad to be a part of this amazing community,</p>
                <p>Thank you @Mo for the invitation !</p>
            </div>
            <p className="date">{this.state.date}</p>
            <div className="follow">
                <a href="#Follow">Follow</a>
            </div>
          </div>
        );
    }
}

 export default TextArea;
