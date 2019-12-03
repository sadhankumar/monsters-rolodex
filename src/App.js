import React, { Component } from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [],
      searchField: ' '
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monster: users}));
  }

  handleChange  = e => {
    this.setState({ searchField: e.target.value});
  };

  render() {
    const { monster, searchField}  = this.state;
    const filteredMonsters = monster.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    console.log(filteredMonsters);
    // console.log(monster.name.includes(searchField.toLowerCase()));
    // console.log(monster.name);
    return (
      <div className="App">
        <h2> monsters rolodex </h2>
        <SearchBox
        placeholder='monster search'
        handleChange= {e=> this.setState({ searchField: e.target.value})}
        > </SearchBox>

        <CardList monsters ={filteredMonsters}>
        </CardList>
      </div>)
  }
}

export default App;
