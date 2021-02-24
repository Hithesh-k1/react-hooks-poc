import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../../actions/userAction";
import { useTheme } from "../../context/themeContext";
import Counter from "../../components/Counter";
import ReducerCounter from "../../components/ReducerCounter";
import HookTimer from "../../components/HookTimer";

function HomePage() {
  const theme = useTheme();
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
  }, []);

  function handleDeleteUser(id) {
    dispatch(userActions.delete(id));
  }

  return (
    <div className="col-lg-8 offset-lg-2">
      <h1 style={{ color: theme.color }}>Hi {user.firstName}!</h1>
      <p>You're logged in with React Hooks!!</p>
      <h3>All registered users:</h3>
      {users.loading && <em>Loading users...</em>}
      {users.error && <span className="text-danger">ERROR: {users.error}</span>}
      {users.items && (
        <ul class="list-group">
          {users.items.map((user, index) => (
            <li key={user.id} className="list-group-item">
              {/* // <li > */}
              {user.firstName + " " + user.lastName}
              {user.deleting ? (
                <em> - Deleting...</em>
              ) : user.deleteError ? (
                <span className="text-danger">- ERROR: {user.deleteError}</span>
              ) : (
                <span>
                  <button
                    style={{ float: "right" }}
                    className="btn btn-danger"
                    onClick={() => handleDeleteUser(user.id)}
                    // className="text-primary"
                  >
                    delete
                  </button>
                </span>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* <Counter/>
      <ReducerCounter/> */}
      <HookTimer/>
      <p>
        <Link to="/login">Logout</Link>
      </p>
    </div>
  );
}

export { HomePage };
