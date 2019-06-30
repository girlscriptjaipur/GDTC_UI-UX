import React from 'react';
import Navbar from './Navbar';
import TextArea from './TextArea';
import Graphic from './Graphic';
import '../stylesheets/Card.css';

class Card extends React.Component{
    render(){        
        return (
            <div className="container-fluid">
                <div className="card-body">
                    <Navbar/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-12">
                                <TextArea/>
                            </div>
                            <div className="col-md-6 d-none d-sm-none d-md-block">
                                <Graphic/>
                            </div>
                         </div>
                     </div>
                </div>
            </div>
        );
    }
}

export default Card;
