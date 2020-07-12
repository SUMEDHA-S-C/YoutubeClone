import React, { Component, Fragment } from "react";
import "./Auth.style.css";
import { withRouter } from "react-router-dom";
import firebase from "../../firebse";
import { toast } from "react-toastify";
import md5 from "md5";
import { Link } from "react-router-dom";
import App from "../../App";

class Autherization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    let { email, password } = this.state;
    e.preventDefault();
    try {
      let userData = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (userData.user.emailVerified) {
        toast.success("Logged in successfully");
        this.props.history.push("/");
      } else {
        let message = `${email} is not verified. Please verify`;
        toast.error(message);
      }
      this.setState({ username: "", email: "", password: "" });
    } catch (err) {
      toast.error(err.message);
    }
  }

  render() {
    return (
      <Fragment>
        <div className="card m5">
          <h4 className="display-5 font-weight-bold text-center my-2">Login</h4>
          <form action="/" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-danger btn-block text-light">
                Login
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Autherization);
