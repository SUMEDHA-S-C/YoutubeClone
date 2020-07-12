import React, { Component, Fragment } from "react";
import "./Header.style.css";
import Search from "../SearchComponent/Search";
import Login from "../AuthComponent/AuthComponent";
import { withRouter, Link } from "react-router-dom";
import firebase from "../../firebse";
import { toast } from "react-toastify";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
    };
    this.SignOut = this.SignOut.bind(this);
  }

  SignOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.history.push("/");
        toast.success("Logged out Successfully");
      })
      .catch((err) => toast.errror(err.message));
  }

  render() {
    let { photoURL, displayName, email } = this.props.user;

    let AnonymousUser = () => {
      return (
        <Fragment>
          <Link className="signIn" to="/Register">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{
                pointerEvents: "none",
                width: "24px",
                height: "20px",
              }}
              className="style-scope yt-icon"
            >
              <g className="style-scope yt-icon">
                <path
                  d="M12,0 C18.62375,0 24,5.37625 24,12 C24,18.62375 18.62375,24 12,24 C5.37625,24 0,18.62375 0,12 C0,5.37625 5.37625,0 12,0 Z M12,10.63625 C13.66,10.63625 15,9.29625 15,7.63625 C15,5.97625 13.66,4.63625 12,4.63625 C10.34,4.63625 9,5.97625 9,7.63625 C9,9.29625 10.34,10.63625 12,10.63625 Z M12,12.40875 C8.33375,12.40875 5.455,14.18125 5.455,15.8175 C6.84125,17.95 9.26875,19.3625 12,19.3625 C14.73125,19.3625 17.15875,17.95 18.545,15.8175 C18.545,14.18125 15.66625,12.40875 12,12.40875 Z"
                  className="style-scope yt-icon signIn-icon"
                />
              </g>
            </svg>
            SIGN IN
          </Link>
        </Fragment>
      );
    };

    let AuthUser = () => {
      return (
        <Fragment>
          <img src={photoURL} alt={displayName} className="profile-img" />
          <Link className="signOut" onClick={this.SignOut}>
            SignOut
          </Link>
        </Fragment>
      );
    };

    return (
      <Fragment>
        <section className="header-block">
          <article>
            <div className="logo">
              <span className="youtube">
                <svg
                  viewBox="0 0 200 60"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  style={{
                    pointerEvents: "none",
                    display: "block",
                    width: "98px",
                    height: "28px",
                  }}
                  className="style-scope ytd-topbar-logo-renderer"
                >
                  <g
                    viewBox="0 0 200 60"
                    preserveAspectRatio="xMidYMid meet"
                    className="style-scope ytd-topbar-logo-renderer"
                  >
                    <g className="style-scope ytd-topbar-logo-renderer">
                      <path
                        fill="#FF0000"
                        d="M63,14.87c-0.72-2.7-2.85-4.83-5.56-5.56C52.54,8,32.88,8,32.88,8S13.23,8,8.32,9.31
            c-2.7,0.72-4.83,2.85-5.56,5.56C1.45,19.77,1.45,30,1.45,30s0,10.23,1.31,15.13c0.72,2.7,2.85,4.83,5.56,5.56
            C13.23,52,32.88,52,32.88,52s19.66,0,24.56-1.31c2.7-0.72,4.83-2.85,5.56-5.56C64.31,40.23,64.31,30,64.31,30
            S64.31,19.77,63,14.87z"
                        className="style-scope ytd-topbar-logo-renderer"
                      />
                      <polygon
                        fill="#FFFFFF"
                        points="26.6,39.43 42.93,30 26.6,20.57"
                        className="style-scope ytd-topbar-logo-renderer"
                      />
                    </g>
                    <g className="style-scope ytd-topbar-logo-renderer">
                      <g
                        id="youtube-paths"
                        className="style-scope ytd-topbar-logo-renderer"
                      >
                        <path
                          fill="#282828"
                          d="M92.69,48.03c-1.24-0.84-2.13-2.14-2.65-3.91c-0.52-1.77-0.79-4.12-0.79-7.06v-4
              c0-2.97,0.3-5.35,0.9-7.15c0.6-1.8,1.54-3.11,2.81-3.93c1.27-0.82,2.94-1.24,5.01-1.24c2.04,0,3.67,0.42,4.9,1.26
              c1.23,0.84,2.13,2.15,2.7,3.93c0.57,1.78,0.85,4.16,0.85,7.12v4c0,2.94-0.28,5.3-0.83,7.08c-0.55,1.78-1.45,3.09-2.7,3.91
              c-1.24,0.82-2.93,1.24-5.06,1.24C95.65,49.29,93.93,48.87,92.69,48.03z M99.66,43.71c0.34-0.9,0.52-2.37,0.52-4.4v-8.59
              c0-1.98-0.17-3.42-0.52-4.34c-0.34-0.91-0.95-1.37-1.82-1.37c-0.84,0-1.43,0.46-1.78,1.37c-0.34,0.91-0.52,2.36-0.52,4.34v8.59
              c0,2.04,0.16,3.51,0.49,4.4c0.33,0.9,0.93,1.35,1.8,1.35C98.71,45.06,99.31,44.61,99.66,43.71z"
                          className="style-scope ytd-topbar-logo-renderer"
                        />
                        <path
                          fill="#282828"
                          d="M188.16,37.13v1.39c0,1.77,0.05,3.09,0.16,3.98c0.1,0.88,0.32,1.53,0.65,1.93
              c0.33,0.4,0.84,0.61,1.53,0.61c0.93,0,1.57-0.36,1.91-1.08c0.34-0.72,0.53-1.92,0.56-3.6l5.35,0.31
              c0.03,0.24,0.04,0.57,0.04,0.99c0,2.55-0.7,4.45-2.09,5.71c-1.39,1.26-3.36,1.89-5.91,1.89c-3.06,0-5.2-0.96-6.43-2.88
              c-1.23-1.92-1.84-4.88-1.84-8.9v-4.81c0-4.14,0.64-7.15,1.91-9.06c1.27-1.9,3.45-2.85,6.54-2.85c2.13,0,3.76,0.39,4.9,1.17
              c1.14,0.78,1.94,1.99,2.41,3.64c0.46,1.65,0.7,3.93,0.7,6.83v4.72H188.16z M188.95,25.53c-0.31,0.39-0.52,1.03-0.63,1.91
              c-0.11,0.88-0.16,2.23-0.16,4.02v1.98h4.54v-1.98c0-1.77-0.06-3.11-0.18-4.02c-0.12-0.91-0.34-1.56-0.65-1.93
              c-0.31-0.37-0.8-0.56-1.46-0.56C189.75,24.94,189.26,25.14,188.95,25.53z"
                          className="style-scope ytd-topbar-logo-renderer"
                        />
                        <path
                          fill="#282828"
                          d="M77.59,36.61l-7.06-25.49h6.16l2.47,11.55c0.63,2.85,1.09,5.27,1.39,7.28h0.18
              c0.21-1.44,0.67-3.85,1.39-7.24l2.56-11.6h6.16L83.7,36.61v12.23h-6.11V36.61z"
                          className="style-scope ytd-topbar-logo-renderer"
                        />
                        <path
                          fill="#282828"
                          d="M126.45,21.28v27.55h-4.85l-0.54-3.37h-0.13c-1.32,2.55-3.3,3.82-5.93,3.82c-1.83,0-3.18-0.6-4.05-1.8
              c-0.87-1.2-1.3-3.07-1.3-5.62V21.28h6.2v20.23c0,1.23,0.13,2.11,0.4,2.63c0.27,0.52,0.72,0.79,1.35,0.79
              c0.54,0,1.06-0.16,1.55-0.49c0.49-0.33,0.86-0.75,1.1-1.26V21.28H126.45z"
                          className="style-scope ytd-topbar-logo-renderer"
                        />
                        <path
                          fill="#282828"
                          d="M158.27,21.28v27.55h-4.85l-0.54-3.37h-0.13c-1.32,2.55-3.3,3.82-5.93,3.82c-1.83,0-3.18-0.6-4.05-1.8
              c-0.87-1.2-1.3-3.07-1.3-5.62V21.28h6.2v20.23c0,1.23,0.13,2.11,0.4,2.63c0.27,0.52,0.72,0.79,1.35,0.79
              c0.54,0,1.06-0.16,1.55-0.49c0.49-0.33,0.86-0.75,1.1-1.26V21.28H158.27z"
                          className="style-scope ytd-topbar-logo-renderer"
                        />
                        <path
                          fill="#282828"
                          d="M143.31,16.11h-6.16v32.72h-6.07V16.11h-6.16v-4.99h18.38V16.11z"
                          className="style-scope ytd-topbar-logo-renderer"
                        />
                        <path
                          fill="#282828"
                          d="M178.8,25.69c-0.38-1.74-0.98-3-1.82-3.78c-0.84-0.78-1.99-1.17-3.46-1.17c-1.14,0-2.2,0.32-3.19,0.97
              c-0.99,0.64-1.75,1.49-2.29,2.54h-0.05l0-14.52h-5.98v39.11h5.12l0.63-2.61h0.13c0.48,0.93,1.2,1.66,2.16,2.2
              c0.96,0.54,2.02,0.81,3.19,0.81c2.1,0,3.64-0.97,4.63-2.9c0.99-1.93,1.48-4.95,1.48-9.06v-4.36
              C179.36,29.84,179.17,27.43,178.8,25.69z M173.11,36.93c0,2.01-0.08,3.58-0.25,4.72c-0.16,1.14-0.44,1.95-0.83,2.43
              c-0.39,0.48-0.91,0.72-1.57,0.72c-0.51,0-0.98-0.12-1.42-0.36c-0.43-0.24-0.79-0.6-1.06-1.08V27.71
              c0.21-0.75,0.57-1.36,1.08-1.84c0.51-0.48,1.06-0.72,1.66-0.72c0.63,0,1.12,0.25,1.46,0.74c0.34,0.49,0.58,1.33,0.72,2.49
              c0.13,1.17,0.2,2.83,0.2,4.99V36.93z"
                          className="style-scope ytd-topbar-logo-renderer"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </div>
            <div className="search">
              <Search FromHeaderFormSubmit={this.props.FromAppFormSubmit} />
            </div>
            <div className="menu-block">
              <span className="menu">
                <button className="icons">
                  <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                    style={{
                      pointerEvents: "none",
                      display: "block",
                      width: "47px",
                      height: "28px",
                    }}
                    className="style-scope yt-icon"
                  >
                    <g className="style-scope yt-icon">
                      <path
                        d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"
                        className="style-scope yt-icon"
                      />
                    </g>
                  </svg>
                </button>
                <button className="icons">
                  <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                    style={{
                      pointerEvents: "none",
                      display: "block",
                      width: "47px",
                      height: "28px",
                    }}
                    className="style-scope yt-icon"
                  >
                    <g className="style-scope yt-icon">
                      <path
                        d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
                        className="style-scope yt-icon"
                      />
                    </g>
                  </svg>
                </button>
                <button className="icons">
                  <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                    style={{
                      pointerEvents: "none",
                      display: "block",
                      width: "47px",
                      height: "28px",
                    }}
                    className="style-scope yt-icon"
                  >
                    <g className="style-scope yt-icon">
                      <path
                        d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
                        className="style-scope yt-icon"
                      />
                    </g>
                  </svg>
                </button>
                {this.props.user.emailVerified ? (
                  <AuthUser />
                ) : (
                  <AnonymousUser />
                )}
              </span>
            </div>
          </article>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(Header);
