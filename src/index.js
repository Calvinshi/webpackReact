import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router , Route} from 'react-router-dom';
import PageA from './pageA';
import PageB from './pageB';
import PageC from './pageC';
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={PageA} />
            <Route  path="/b" component={PageB} />
            <Route  path="/c" component={PageC} />
        </div>
    </Router>,
    document.getElementById("root")
);


if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module!");
    printMe();
  });
}
