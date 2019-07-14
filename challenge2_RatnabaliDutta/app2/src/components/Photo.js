import React from 'react';
import '../stylesheets/Photo.css';
import '../stylesheets/Video.css';

class Photo extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="gallery upload">
                            <i className="plus fas fa-plus"></i>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="gallery">
                              <img src="https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" className="gallery-img" alt="gallery-img"/>
                         </div> 
                    </div>
                    <div className="col-3">
                        <div className="gallery">
                              <img src="https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="gallery-img" alt="gallery-img"/>
                         </div> 
                    </div>
                    <div className="col-3">
                        <div className="gallery">
                              <img src="https://images.pexels.com/photos/1034832/pexels-photo-1034832.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" className="gallery-img" alt="gallery-img"/>
                         </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Photo;
