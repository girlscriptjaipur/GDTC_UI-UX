import React from 'react';
import '../stylesheets/Graphic.css';

class Graphic extends React.Component{
    render(){
        return(
            <div className="graphic">
                 <div className="cloud1">
                     <div className="circle"></div>
                     <div className="filler"></div>
                 </div>
                 <div className="sun">
                    <div className="message text-center">Hi !</div>
                    <div className="eye eye1"></div>
                    <div className="eye eye2"></div>
                 </div>
                 <div className="cloud2">
                     <div className="circle"></div>
                     <div className="filler"></div>
                 </div>
            </div>
        );
    }
}

export default Graphic;
