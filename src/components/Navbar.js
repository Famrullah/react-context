import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import {AuthContext} from '../context/AuthContext'

export default class Navbar extends Component {
  // static contextType = ThemeContext;
  render() {
    return (
      <AuthContext.Consumer>{(authContext)=>(
        <ThemeContext.Consumer>{(themeContext)=>{
          const {isAuthenticated,toggleAuth} = authContext;
          const { dark, isLightTheme, light } = themeContext;
          const theme = isLightTheme ? light : dark;
            return(
              <nav style={{ background: theme.ui, color: theme.syntax }}>
                <h1>React Context </h1>
                <div onClick={toggleAuth}>
                  {isAuthenticated ?'Logged In':'Logged Out'}
                </div>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            )
          }}
        </ThemeContext.Consumer>
      )}
      </AuthContext.Consumer>
    );
  }
}
