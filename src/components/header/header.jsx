import React, { Component } from "react";
import "./style.css";
import api from "../../services/service";

class Header extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    this.loadCategory();
  }
  loadCategory = async () => {
    const { data: categories } = await api.get("/category");
    this.setState({ categories });
  };
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <h5 className="my-3">
                <a href="/"> PHOTO GALLERY</a>
              </h5>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 menu">
              <ul className="menu-list">
                {this.state.categories.map(category => (
                  <li key={category._id}>
                    <a href={`/category/${category.name}`}>{category.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
