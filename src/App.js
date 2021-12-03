import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }

    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(e) {
  //   //how to bind the keyword this on line 19 with the scope of this class ?
  //   this.setState({ searchField: e.target.value });
  // }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(error => console.log(error));
  }

  render() {

    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) || monster.email.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          // handleChange={this.handleChange.bind(this)}
          handleChange={this.handleChange}
        />
        <CardList monsters={filterMonsters} />
      </div>
    )
  }
}
