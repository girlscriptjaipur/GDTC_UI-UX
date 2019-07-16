import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu'
import '../stylesheets/Tabs.css'

const list = [
    {name: "CHAT"},
    {name: "FEATURED"},
    {name: "POPULAR"},
    {name: "FOLLOWERS"}
];

const MenuItem = ({text, selected}) => {
    return (
        <div className="menu-item">{text}</div>
    );
};
export const Menu = (list) => list.map(el => {
  const { name } = el;

  return (
    <MenuItem
      text={name}
      key={name}
    />
  );
});


class Tabs extends React.Component{
    
    state = {
        selected: 0
    };

   onSelect = key => {
    this.setState({ selected: key });
  } 
    render(){

        const {selected} = this.state;
        const menu = Menu(list, selected);

        return(
            <ScrollMenu data={menu}
                        selected={selected}
                        onSelect={this.onSelect}
            />
        );
    }
}

export default Tabs;
