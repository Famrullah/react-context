import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './context/ThemeContext';
import Toggle from './components/ThemeToggle'
import AuthContext from './context/AuthContext'
import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContext>
          <Navbar />
          <BookList />
          <Toggle/>
        </AuthContext>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
