import AppReducer from '../AppReducer';
import { createStore } from 'redux';

const initialStore = {
    transactions: [],
    error: null,
    loading: true
};

const store = createStore(AppReducer, initialStore);

export default store;