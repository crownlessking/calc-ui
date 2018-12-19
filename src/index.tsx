import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware,  combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import bootstrapReducers from './bootstrap3/reducers';
import './index.css';
import initialState from './initial-state';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const allReducers = combineReducers({
  ...bootstrapReducers,
  ...reducers
});

const middleware = [thunk];

const store = createStore(
  allReducers,
  initialState as any,
  applyMiddleware(...middleware)
);

/* Original
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
*/

const HTMLElement = document.getElementById('root');

// react-snap is implemented
// more info:
// https://github.com/stereobooster/react-snap
if (HTMLElement && HTMLElement.hasChildNodes()) {
  ReactDOM.hydrate(
    <Provider store={store}><App /></Provider>,
    HTMLElement
  );
} else {
  ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    HTMLElement
  );
}

registerServiceWorker();