import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Profile } from '../Profile';
import Home from '../Home';

export const Router = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/home" className="menu__link">HOME</Link>
        </li>
        <li>
          <Link to="/profile" className="menu__link">PROFILE</Link>
        </li>
      </ul>

      <Switch>
        <Route
          path="/profile"
          render={(data) => <Profile match={data.match} />}
        ></Route>
        <Route path="/home/:chatId?"><Home /></Route>
        <Route path="/" exact>
          <h2>WELCOME</h2>
        </Route>
        <Route path="*">
          <h2>404</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
