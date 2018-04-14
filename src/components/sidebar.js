import React from 'react';
import SidebarItem from './sidebarItem';

const Sidebar = (props) => {
    // Wraps components elow. props.linkData.X refers to JSON .links object.
    // Name refers to what will actually display on the sidebar.
    return(
        <div className="sidebar_wrapper">
            <SidebarItem type={props.linkData.Fourchan} name="4chan"/>
            <SidebarItem type={props.linkData.Social} name="Social"/>
            <SidebarItem type={props.linkData.Coding} name="Coding"/>
            <SidebarItem type={props.linkData.Music} name="Music"/>
        </div>
    );
}

export default Sidebar;