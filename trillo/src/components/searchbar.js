import React from "react";

export default class SearchBar extends React.Component {
  state = {
    input: "",
  };

  render () {
    return (
      <form action="#" className="searchbar">
        <input
          className="searchbar__input"
          onChange={this.handleInputChange}
          placeholder="Search hotels"
          type="text"
          value={this.state.input}
        />

        <button className="searchbar__button">
          <svg className="searchbar__icon">
            <use
              xlinkHref="../../img/sprite.svg#icon-magnifying-glass"
            />
          </svg>
        </button>
      </form>
    );
  }

  handleInputChange = e => this.setState({ input: e.target.value });
}
