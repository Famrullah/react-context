import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';


export default class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { dark, isLightTheme, light } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <ul>
          <li style={{ color: theme.syntax, background: theme.ui }}>
            The way of kings
          </li>
          <li style={{ color: theme.syntax, background: theme.ui }}>
            The name of the wind
          </li>
          <li style={{ color: theme.syntax, background: theme.ui }}>
            The final empire
          </li>
        </ul>
      </div>
    );
  }
}
