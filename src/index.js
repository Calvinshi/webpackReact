import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router , Route , Switch ,Redirect} from 'react-router-dom';
import PageA from './pageA';
import PageB from './pageB';
import PageC from './pageC';
import Nav from './nav';
import Error from './error';



ReactDOM.render(
    <Router>
        <Nav></Nav>
        <Switch>
            <Route exact path="/" component={PageA} />
            <Route  path="/b" component={PageB} />
            <Route  path="/c/:aa/:bb" component={PageC} />
            <Redirect from = "/redirect" to="/b"></Redirect>
            <Route component = {Error} />
        </Switch>
        <Switch>
            <Route exact path="/" component={PageB} />
            <Route  path="/b" component={PageA} />
            <Route  path="/c/:aa/:bb" component={PageC} />
            <Redirect from = "/redirect" to="/b"></Redirect>
            <Route component = {Error} />
        </Switch>
    </Router>,
    document.getElementById("root")
);


if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module!");
    printMe();
  });
}
