import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Profile } from "../Profile";
import Home from '../Home';
import {GistsList} from '../GistsList'

export const Router = () => {
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
      </ul>

      <Switch>
        <Route
          path="/profile"
          render={(data) => <Profile match={data.match} />}>
        </Route>
        <Route path="/home/:chatId?"><Home />
        </Route>
        <Route path="/" exact>
        </Route>
        <Route path="/gists">
          <GistsList />
        </Route>
        <Route path="*">
          <h2>404</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
