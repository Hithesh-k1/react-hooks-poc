import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { history } from "./utils/history";
import { alertActions } from "./actions/alertActions";
import { PrivateRoute } from "./components/PrivateRoute";
import { HomePage } from "./pages/Home/Home";
import { LoginPage } from "./pages/Login/Login";
import RegisterPage from "./pages/Registration/Registration";
import { ThemeContext } from "./context/themeContext";

function App() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);

  return (
    <div className="jumbotron">
      <div className="container">
        <div className="col-md-8 offset-md-2">
          {alert.message && (
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          )}
          <Router history={history}>
            <Switch>
              <ThemeContext.Provider value={{color:"yellow"}}>
                <PrivateRoute exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              {/* <Redirect from="*" to="/" /> */}
              </ThemeContext.Provider>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
