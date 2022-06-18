import React from "react";
import Card from "./Card";
import SearchBox from "./SearchBox";
import { useState, useEffect } from "react";
import "../css/searchbox.css";

function FilmCards() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  useEffect(() => {
    fetchItems();
  }, []);

  //fetch items
  const fetchItems = async () => {
    const data = await fetch("https://ghibliapi.herokuapp.com/films");
    //convert data to json
    const items = await data.json();
    //setitems
    setItems(items);
    //set init filtered items
    setFilteredItems(items);
  };
  //search text on change
  const handleChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    let filteredList = items.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    //set filtered items to new filtered list
    setFilteredItems(filteredList);
  };

  return (
    <>
      <SearchBox searchChange={handleChange} />
      <div className="container">
        {filteredItems.map((item) => (
          <Card
            id={item.id}
            title={item.title}
            japan_title={item.original_title}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
}

export default FilmCards;
