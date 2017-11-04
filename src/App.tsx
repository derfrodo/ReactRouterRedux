
import * as React from 'react';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import reducers from './reducers/reducers'; // Or wherever you keep your reducers

import createHistory from 'history/createBrowserHistory';

// Components
import About from './About/About';

// Create a history of your choosing (we're using a browser history in this case)
// tslint:disable-next-line:no-any
const history: any = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

declare global {
    // tslint:disable:interface-name
    // tslint:disable-next-line:no-any
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    composeEnhancers(applyMiddleware(middleware))
);

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" render={() => <About />} />
                    <Route path="/topics" children={() => <div>I am always there for you!</div>} />
                </div>
            </ConnectedRouter>
        </Provider>);
};


const Home = (props: {}) => {
    return (
        <div>
            <p>Home is awesome!</p>
            <Link to="/about">About</Link>
        </div>
    );
};

export default App;

// ReactDOM.render(
//   <Provider store={store}>
//     { /* ConnectedRouter will use the store from Provider automatically */}
//     <ConnectedRouter history={history}>
//       <div>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/topics" component={Topics} />
//       </div>
//     </ConnectedRouter>
//   </Provider>,
//   document.getElementById('root')
// )

// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';

// import createHistory from 'history/createBrowserHistory';
// import { Route } from 'react-router';

// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

// import './App.css';

// // const logo = require('./logo.svg');

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <h2>Hallo Kerstin!</h2>
//         </div>
//         <p className="App-intro">
//           < CodeInput />
//           To get started, edit <code>src/App.tsx</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

// class CodeInput extends React.Component {
//   render() {
//     return <input type="text" value={} onChange={()=>}/>;
//   }
// }