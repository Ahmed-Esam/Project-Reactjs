import React, { Component } from 'react';
import  logo  from '../../img/logo.svg';
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Home</h1>
                <img src={logo} className='logo' width="300" height="150"/>
                <h2>Reactjs</h2>
            </div>
         );
    }
}
 
export default Home;
 
