import React from 'react';
import logo from './logo.svg';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';


class App extends React.Component {
  render()
  {
    return (
    <div class="App">
      <SearchBar/>
      <BusinessList/> 
    </div>
  )
}
}

export default App;
