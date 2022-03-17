import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Form from "./components/Form";
import People from "./views/People";
import Planet from "./views/Planet";

function App() {
  return (
    <BrowserRouter>
      <Form/>
      <Switch>
        <Route path="/people/:id">
          <People/>
        </Route>
        <Route path="/planets/:id">
          <Planet/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
