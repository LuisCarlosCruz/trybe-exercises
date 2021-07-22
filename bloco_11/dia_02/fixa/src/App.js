import React from 'react';
import './App.css';
import Image from './Image.js';

class App extends React.Component {
  render(){
    return(
      <div>
        <Image />
      </div>
    );
  }
};

// ReactDom.render(<Image />, document.getElementById('root'));

export default App;
