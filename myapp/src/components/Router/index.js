import React, { useEffect } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Profile from "../Profile";
import Home from "../Home";
import { GistsList } from "../GistsList";
import { PrivateRoute } from "../../hocs/PrivateRoute";
import { PublicRoute } from "../../hocs/PublicRoute";
import { Login } from "../LogIn";
import { connectProfileToFB } from "../../store/profile/actions";
import { Logout } from "../LogOut";

export const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectProfileToFB());
  }, []);

  return (
    <BrowserRouter>
      <ul className="menu__list">
        <li className="menu__list-item">
          <Link to="/home" className="menu__link">HOME</Link>
        </li>
        <li className="menu__list-item">
          <Link to="/profile" className="menu__link">PROFILE</Link>
        </li>
        <li className="menu__list-item" >
          <Link to="/gists" className="menu__link">GISTS</Link>
        </li>
        <li className="menu__list-item" >
        <Logout />
        </li>
      </ul>

     

      <Switch>
        <PrivateRoute
          path="/profile"
          render={(data) => (
            <Profile match={data.match} history={data.history} />
          )}
        />
        <PrivateRoute path="/home/:chatId?">
          <Home />
        </PrivateRoute>
        <PublicRoute path="/gists">
          <GistsList />
        </PublicRoute>
        <PrivateRoute path="/nochat">
          <div> No such chat</div>
          <Link to="/home">HOME</Link>
        </PrivateRoute>
        <Route path="/" exact>
          <h2>WELCOME</h2>
        </Route>
        <PublicRoute path="/login" exact>
          <Login />
        </PublicRoute>
        <PublicRoute path="/signup" exact>
          <Login isSignUp />
        </PublicRoute>
        <Route path="*">
          <h2>404</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};