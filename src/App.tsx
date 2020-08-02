import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import Form from "./components/Form";
import Posts from "./components/Posts";

import "./scss/main.scss";

const App: FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </div>
  );
};

export default App;
