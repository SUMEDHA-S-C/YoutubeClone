import React, { Component, Fragment } from "react";
import "./HomePage.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <section className="homepage-container">
          <article>
            <div className="img"></div>
            <div className="text">
              <div className="card homepage-text">
                <h1 className="display-5 text-uppercase font-weigth-bold text-center">
                  Please Sign In to continue
                </h1>
              </div>
            </div>
          </article>
        </section>
      </Fragment>
    );
  }
}

export default Home;
