import React from 'react';
import './App.css';
import logo from './asset/logo.png';
import List from './components/List';

// const title = 'React Training';

function App() {
  const title = 'React training';
  return (
    <div>
      <nav>
        <div className="heading">
          <h1>Welcome to {title}</h1>
          <img src={logo}/>
        </div>
        </nav>
        <List/>
    </div>
  );
}

export default App;