import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }


  handleSearchInput(event) {
    let userInput = event.target.value;
    this.setState({ searchValue: userInput })
  }

  render() {
    return (
      <div className="searchBar">
        <form >
          <input type="text" onChange={this.handleSearchInput.bind(this)} placeholder="Search" />
        </form>
      </div>
    );
  }

}

export default SearchBar;


