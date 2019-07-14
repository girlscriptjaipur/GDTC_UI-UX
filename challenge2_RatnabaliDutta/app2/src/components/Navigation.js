import React from 'react';
import Block from './Block';
import Search from './Search';
import '../stylesheets/Navigation.css';

class Navigation extends React.Component{
    render(){
        return (
        <div className="container-fluid">
        <h1>Notifications</h1>
        <div id="exTab1" className="container-fluid">	
            <Search />
            <ul  className="nav">
			    <li className="nav-item active">
                    <a className="nav-link" href="#1a" data-toggle="tab">Today</a>
			    </li>
			    <li className="nav-item">
                    <a className="nav-link" href="#2a" data-toggle="tab">Last Week</a>
                </li>
		    </ul>
			<div className="tab-content clearfix">
			  <div className="tab-pane active" id="1a">
			      <Block url="https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" name="Jimmy" duration="2 hours ago"/>
                  <Block url="https://images.pexels.com/photos/990824/pexels-photo-990824.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" name="Bob" duration="2 hours ago"/>
                  <Block url="https://images.pexels.com/photos/990826/pexels-photo-990826.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" name="Cindy" duration="3 hours ago"/>
                  <Block url="https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" name="Daisy" duration="11 hours ago"/>
                  <Block url="https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" name="Robert" duration="12 hours ago"/>
              </div>
				<div className="tab-pane" id="2a">
                    <Block url="https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?aut    o=compress&cs=tinysrgb&h=750&w=1260" name="Robert" duration="1 week ago"/>
                    <Block url="https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg?auto=    compress&cs=tinysrgb&h=750&w=1260" name="Donald" duration="1 week ago"/>
                    <Block url="https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=    compress&cs=tinysrgb&h=750&w=1260" name="Daisy" duration="1 week ago"/>
                    <Block url="https://images.pexels.com/photos/990824/pexels-photo-990824.jpeg?auto=    compress&cs=tinysrgb&h=750&w=1260" name="Cindy" duration="1 week ago"/>
                    <Block url="https://images.pexels.com/photos/990826/pexels-photo-990826.jpeg?auto=    compress&cs=tinysrgb&h=750&w=1260" name="Jimmy" duration="1 week ago"/>
                </div>
			</div>
        </div>
  </div>
  );
    }
}
export default Navigation;
