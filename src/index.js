import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,IndexRoute,hashHistory } from 'react-router';
import PropTypes from 'prop-types';
import Home from './client/home';
import Root from './client/root';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

Route.propTypes = {
    path:PropTypes.string,
    component:PropTypes.func.isRequired
};
IndexRoute.propTypes = {
    component:PropTypes.func.isRequired,
};
Router.propTypes = {
    history:PropTypes.object.isRequired
};


ReactDOM.render(
<Router history={hashHistory}>
    <Route path="/" component={Home}>
        <IndexRoute component={Root} />
    </Route>
</Router>,
document.getElementById('root'));
registerServiceWorker();
