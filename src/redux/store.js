import { createStore, compose, applyMiddleware } from 'redux';
import reducer from "./reducer";

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools ? devtools : compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware()));
export default store;