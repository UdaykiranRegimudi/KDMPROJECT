import React, { Component } from 'react';
import Main from './components/MainComponent';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import { logLibrary , getUniqueIdWithTs } from './lib/Library.js';


console.log("In App.js")

console.log("Calling logLibrary")
console.log(logLibrary())
console.log("Calling getUniqueIdWithTs")
console.log("UniqueId obtained : " + getUniqueIdWithTs())

/*console.log("Calling dbtest")
console.log(dbtest())
*/

console.log("Calling ConfigureStore")
const store = ConfigureStore();

class App extends Component {

  render() {
    return (
    
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

