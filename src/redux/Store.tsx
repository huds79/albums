import { createStore, combineReducers } from 'redux';
import reducer from './Reducer';

const rootReducer = combineReducers({
    store: reducer,
});

const store = createStore(rootReducer);

export default store;
