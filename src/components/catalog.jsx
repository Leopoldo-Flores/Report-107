import React, { Component } from "react";
import Item from "./item";
import "./catalog.css";
import ItemService from "../services/itemService";

class Catalog extends Component {
  state = {
    items: [],
    categories: []
  };

  // display elements on the screen
  render() {

    let itemsToDisplay = this.state.items;

    console.log("Render catalog");
    return (
      <div className="catalog-page">
        <h3>{this.state.items.length} Amazing silicone pets to take home!</h3>

        <div className="filter-buttons">
        
        </div>

        <div className="filter-buttons">
            {this.state.categories.map((cat) => (
                <button onClick={this.filterItems} className="btn btn-info" key={cat}>
                    {cat}
                </button>
            ))}
        </div>

       {this.state.categories.map( cat => <button></button>)}


        {this.state.items.map((prod) => (
          <Item key={prod._id} prod={prod}></Item>
        ))}
      </div>
    );
        }

    filterItems = (category) => {
        console.log("Filtering", category);
        this.setState({ selectedCategory: category });
    };

  // called after the render function
  componentDidMount() {
    console.log("Catalog did mount");

    // call the service to get the list
    var itemService = new ItemService();
    var items = itemService.getCatalog();
    console.log(items);
    this.setState({ items: items });

    // identify the unique categories
    let cats = [];
    for (let i = 0; i < items.length; i++) {
      let cat = items[i].category;

      if (!cats.includes(cat)) {
        cats.push(cat);
      }
    }
    console.log("Unique categories", cats);
  }
}

export default Catalog;