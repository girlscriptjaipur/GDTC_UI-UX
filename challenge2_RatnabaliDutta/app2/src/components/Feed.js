import React from 'react';
import Tabs from './Tabs';
import Photo from './Photo';
import Video from './Video';
import '../stylesheets/Feed.css';

class Feed extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="header">
                    <h1>Feed</h1>
                    <p>Sed ut amnet dolor</p>
                </div>
                <div className="status">
                    <div className="row">
                        <div className="col-4 col-sm-4 col-md-4">
                            <div className="one">
                                <p className="number">24</p>
                                <p className="type">photos</p>
                            </div>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4">
                            <div className="two">
                                <p className="number">48</p>
                                <p className="type">articles</p>
                            </div>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4">
                            <div className="three">
                                <p className="number">22k</p>
                                <p className="type">followers</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Tabs />
                <Photo />
                <Video />
            </div>
        );
    }
}

export default Feed;
