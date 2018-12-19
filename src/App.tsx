import * as React from 'react';
import './App.css';
import Navigation from './bootstrap3/components/navigation/';
import Home from './components/home/Home';

class App extends React.Component {

  public render() {

    return [
      <Navigation key={1} />,
      <Home key={2} />
    ];

  }

}

export default App;
