import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../../actions/userAction";
import useInput from "../../hooks/useInput";

function Registration() {
  // const [user, setUser] = useState({
  //   firstName: "",
  //   lastName: "",
  //   username: "",
  //   password: "",
  // });

  const [firstName, bindFirstName] = useInput("");
  const [lastName, bindLastName] = useInput("");
  const [username, bindUsername] = useInput("");
  const [password, bindPassword] = useInput("");

  const [submitted, setSubmitted] = useState(false);
  const registering = useSelector((state) => state.registration.registering);
  const dispatch = useDispatch();

  //   reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setUser((user) => ({ ...user, [name]: value }));
  // }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (firstName && lastName && username && password) {
      dispatch(
        userActions.register({ firstName, lastName, username, password })
      );
    }
  }

  return (
    <div className="col-lg-8 offset-lg-2">
      <h2>Register</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            {...bindFirstName}
            // value={user.firstName}
            // onChange={handleChange}
            className={
              "form-control" + (submitted && !firstName ? " is-invalid" : "")
            }
          />
          {submitted && !firstName && (
            <div className="invalid-feedback">First Name is required</div>
          )}
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            // value={user.lastName}
            // onChange={handleChange}
            {...bindLastName}
            className={
              "form-control" + (submitted && !lastName ? " is-invalid" : "")
            }
          />
          {submitted && !lastName && (
            <div className="invalid-feedback">Last Name is required</div>
          )}
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            // value={user.username}
            // onChange={handleChange}
            {...bindUsername}
            className={
              "form-control" + (submitted && !username ? " is-invalid" : "")
            }
          />
          {submitted && !username && (
            <div className="invalid-feedback">Username is required</div>
          )}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            // value={user.password}
            // onChange={handleChange}
            {...bindPassword}
            className={
              "form-control" + (submitted && !password ? " is-invalid" : "")
            }
          />
          {submitted && !password && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
            {/* {registering && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )} */}
            Register
          </button>
          {/* <Link to="/login" className="btn btn-link">
            Cancel
          </Link> */}
        </div>
      </form>
    </div>
  );
}

export default Registration;
