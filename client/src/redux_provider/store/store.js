import AppReducer from '../AppReducer';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import expanseTrackerSaga from '../../sagas';

const initialStore = {
    transactions: [],
    error: null,
    loading: true
};

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(){
    const store = createStore(
        AppReducer,
        initialStore,
        applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(expanseTrackerSaga);

    return store;
}