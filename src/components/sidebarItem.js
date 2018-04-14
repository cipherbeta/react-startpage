import React, { Component } from 'react';

class SidebarItem extends Component {

    state = {
        barActive: false
    }

    // Maps out links based on data.json file, and info passed by sidebar
    GenerateLinks = () => {
        let links = this.props.type.map((item,i)=>{
            return(
                <a href={item.url} key={i}>
                    <div key={i} className="sidebar_item_menu">
                    {item.name}
                    </div>
                </a>
            );
        })
        return links;
    }

    // Handles clicks on our button, and toggles state for the item.
    HandleClick = (event) => {
        // Makes sure we don't accidentally click on something while closed
        if(this.state.barActive === false && event.target.tagName.toLowerCase() !== 'a' && event.target.classList[0] !== "sidebar_item_menu"){
            event.preventDefault();
        } else if(event.target.tagName.toLowerCase() === 'a'){
            return true;
        }
        let boolSwap = !this.state.barActive;
        this.setState({
            barActive: boolSwap
        });
    }


    render(){
        return(
        <div
            className="sidebar_item_wrapper"
            onClick={this.HandleClick}
        >
            <h1 className="sidebar_item_header">
            {this.props.name}
            </h1>

            <div className={
                this.state.barActive ? 
                "sidebar_item_popout active" : 
                "sidebar_item_popout"
            }>

            { this.GenerateLinks() }

            </div>
        </div>
        );
    }
}

export default SidebarItem;