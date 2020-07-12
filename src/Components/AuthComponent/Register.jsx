import React, { Component, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../firebse";
import md5 from "md5";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
    e.preventDefault();
    // console.log(this.state);
    let { username, email, password } = this.state;
    try {
      let userData = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      this.props.history.push("/Login");
      userData.user.sendEmailVerification();
      let message = `A verification mail has been sent to ${email}. Please verify.`;
      toast.success(message);

      await userData.user.updateProfile({
        displayName: username,
        photoURL: `https://www.gravatar.com/avatar/${md5(
          userData.user.email
        )}?d=identicon`,
      });
      await firebase
        .database()
        .ref()
        .child("/users" + userData.user.uid)
        .set({
          photoURL: userData.user.photoURL,
          uid: userData.user.uid,
          email: userData.user.email,
          registrationData: new Date().toString(),
        });
    } catch (err) {
      toast.error(err.message);
    }
  }
  render() {
    return (
      <Fragment>
        <div className="card m5">
          <h4 className="display-5 font-weight-bold text-center my-2">
            Register
          </h4>
          <form action="/" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="Username">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
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
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-danger btn-block text-light">
                Register
              </button>
            </div>
            <p>
              Already have an account?<Link to="/Login">Sign In</Link>
            </p>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Register);
