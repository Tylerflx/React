import { render } from "@testing-library/react";
import React, { Component } from "react";
import Card from "./Card";
import SeachBox from "./SearchBox";

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ cats: users }));
  }

  render() {
    const { cats, searchField } = this.state;
    const filteredCats = cats.filter((cat) => {
      return cat.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Cat Info</h1>
        <SeachBox searchChange={this.onSearchChange} />
        {filteredCats.map((user, i) => {
          return (
            <Card
              key={filteredCats[i].id}
              id={filteredCats[i].id}
              name={filteredCats[i].name}
              email={filteredCats[i].email}
              website={filteredCats[i].website}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
