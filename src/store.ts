import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import recommendReducer from './page/Recommend/store/reducer';

const Reducer = combineReducers({
  recommend: recommendReducer,
});

export const Store = createStore(
  Reducer,
  compose(applyMiddleware(thunk))
);

export type initState = ReturnType<typeof Reducer>;