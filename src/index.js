// import React from 'react';
// import { render } from 'react-dom';
// import { Router, Route, hashHistory } from 'react-router';
// import { Provider } from 'react-redux';
// import store from './store';
// import Navigation from './presentational/navigation.component';

// render(
//     <Provider store={store}>
//         <Router history={hashHistory}>
//             <Route path='/' component={Navigation}>

//             </Route>
//         </Router>
//     </Provider>,
//     document.getElementById('root')
// );


import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';
import './country.css';
render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);