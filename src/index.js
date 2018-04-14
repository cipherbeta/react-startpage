import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import elements
import BG from './components/bg';
import Search from './components/search';
import Sidebar from './components/sidebar';

// import json
import Data from './data.json';

class App extends Component {
    //state does jack for now, custom bg's coming soon
    state = {
        bgSelected: "mbg4"
    }


    render(){
        console.log(Data);
        return(
            <div className="container">
                <Sidebar linkData={Data.links}/>
                <BG>
                    <Search/>
                </BG>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
