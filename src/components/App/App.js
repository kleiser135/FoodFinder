import React from 'react';
import logo from './logo.svg';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const businesses = [business,business,business,business,business,business];

class App extends React.Component {
  render()
  {
    return (
    <div class="App">
      <SearchBar/>
      <BusinessList businesses={businesses}/> 
    </div>
  )
}
}

export default App;
