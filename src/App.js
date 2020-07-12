import React, { Component, Fragment } from "react";
import Header from "./Components/HeaderComponent/Header";
import youtubeApi, { baseParams } from "./Api/Youtubeapi";
import VideoList from "./VideosComponent/VideoList";
import Login from "./Components/AuthComponent/AuthComponent";
import Register from "./Components/AuthComponent/Register";
import VideoDetails from "./VideosComponent/VideoDetails";
import HomePage from "./Components/HomePage/HomePage";

import {
  Switch,
  Route,
  BrowserRouter as Router,
  withRouter,
} from "react-router-dom";
import firebase from "./firebse";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      loading: false,
      selectedVideo: null, //one slected video out of 10 videos
      userData: "",
    };
  }

  async componentWillMount() {
    await firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ userData: user });
        this.formSubmit("reactJS");
      } else {
        this.setState({ userData: "" });
        this.props.history.push("/");
      }
    });
  }
  formSubmit = async (term) => {
    console.log(term);
    let response = await youtubeApi.get("/search", {
      params: {
        q: term,
        ...baseParams,
      },
    });
    // console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      loading: true,
      selectedVideo: response.data.items[0],
    });
  };

  onSelectedVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <Fragment>
        <Router>
          <header>
            <Header
              FromAppFormSubmit={this.formSubmit}
              user={this.state.userData}
            />
          </header>
          <ToastContainer />

          <main className="container-fluid my-4 pl-4 pr-4">
            {this.state.userData ? (
              <Fragment>
                <section id="data-list">
                  <article>
                    <div className="player_Block">
                      <VideoDetails video={this.state.selectedVideo} />
                    </div>
                    <div className="list-block">
                      <VideoList
                        videos={this.state.videos}
                        onSelectedVideo={this.onSelectedVideo}
                      />
                    </div>
                  </article>
                </section>
              </Fragment>
            ) : (
              <Route path="/" exact component={HomePage} />
            )}
            <Switch>
              <Route
                path="/Login"
                exact
                component={() => <Login user={this.state.userData} />}
              />
              <Route
                path="/Register"
                exact
                component={() => <Register user={this.state.userData} />}
              />
              {/* {this.state.userData ? null : (
               
              )} */}
            </Switch>
          </main>
        </Router>
      </Fragment>
    );
  }
}

export default withRouter(App);
