import React from 'react';
import '../stylesheets/Photo.css';
import '../stylesheets/Video.css';

class Video extends React.Component{
    render(){
        return(
            <div className="video container">
                <div className="row">
                    <div className="col-4">
                        <div className="gallery upload">
                            <i className="plus fas fa-plus"></i>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="gallery">
                              <img src="https://images.pexels.com/photos/2599116/pexels-photo-2599116.png?auto=compress&cs=tinysrgb&h=750&w=1260" className="gallery-img" alt="video"/>
                              <div className="box"></div>
                         </div> 
                    </div>
                    <div className="col-4">
                        <div className="gallery">
                              <img src="https://images.pexels.com/photos/2253573/pexels-photo-2253573.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" className="gallery-img" alt="video"/>
                              <div className="box"></div>
                         </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Video;
