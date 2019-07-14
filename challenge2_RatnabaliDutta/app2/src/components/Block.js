import React from 'react';

function Block(props){
        return(
			  <div className="notifs">
                 <img className="img-fluid notif-img" src={props.url} alt="notif"/>
                  <div className="row detail">
                    <p>{props.name}, commented on your post.</p>
                  </div>
                  <div className="duration">{props.duration}</div>
               </div>
            
        );
    }

export default Block;
