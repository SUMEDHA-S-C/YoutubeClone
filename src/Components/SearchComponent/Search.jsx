import React, { Component, Fragment } from "react";
import "./Search.style.css";

class Serch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ term: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state.term);
    this.props.FromHeaderFormSubmit(this.state.term);
  }
  render() {
    return (
      <Fragment>
        <div className="input">
          <form action="/" id="form" onSubmit={this.handleSubmit}>
            <input
              type="search"
              placeholder="Search"
              value={this.state.term}
              onChange={this.handleChange}
            />
            <button className="search-btn">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Serch;
