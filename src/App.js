// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Testthree from './Testthree';
import TestthreeOne from './TestthreeOne';
import Geometry from './Geometry';
import GeometryTexture from './GeometryTexture';
import BlenderModel from './blenderModel';

function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Testthree />
          </Route>
          <Route path="/3js-1">
            <TestthreeOne />
          </Route>
          <Route path="/geometry">
            <Geometry />
          </Route>
          <Route path="/geometryTexture">
            <GeometryTexture />
          </Route>
          <Route path="/blenderModel">
            <BlenderModel />
          </Route>
        </Switch>
      </div>
  </Router>
  );
}

export default App;
