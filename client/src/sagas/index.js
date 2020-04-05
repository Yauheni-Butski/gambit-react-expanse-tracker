import { takeEvery, put, call } from 'redux-saga/effects';
import { transactionError, deleteTransaction, getAllTransactions, addTransaction } from '../context/actions';
import { eventChannel, END } from 'redux-saga';

import axios from 'axios';

function* onChannelEmit(action){
    yield put(action);
}

function deleteTransactionChannel(id){
    return eventChannel(emit => {
        axios.delete(`/api/v1/transactions/${id}`)
            .then(res => {
                emit(deleteTransaction(id));
                emit(END);
            })
            .catch(error => {
                emit(transactionError(error.response.data.error))
                emit(END);
            });

            const unsubscribe = () => {};
            return unsubscribe;
    });
}

function* delTransaction(action){
   const chan = yield call(deleteTransactionChannel, action.payload);
   yield takeEvery(chan, onChannelEmit);
}

function fetchTransactionsChannel(){
    return eventChannel(emit => {
        axios.get(`/api/v1/transactions`)
            .then(res => {
                emit(getAllTransactions(res.data.data));
                emit(END);
            })
            .catch(error => {
                emit(transactionError(error.response.data.error))
                emit(END);
            });

            const unsubscribe = () => {};
            return unsubscribe;
    });
}

function* fetchTransactions(){
    const chan = yield call(fetchTransactionsChannel);
    yield takeEvery(chan, onChannelEmit);
}

function addTransactionChannel(transaction){
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return eventChannel(emit => {
        axios.post('/api/v1/transactions', transaction, config)
            .then(res => {
                emit(addTransaction(res.data.data));
                emit(END);
            })
            .catch(error => {
                emit(transactionError(error.response.data.error))
                emit(END);
            });

            const unsubscribe = () => {};
            return unsubscribe;
    });
}

function* addNewTransaction(action){
    const chan = yield call(addTransactionChannel, action.payload);
    yield takeEvery(chan, onChannelEmit);
}

const expanseTrackerSaga = function* () {
    yield takeEvery('SAGA_FETCH_TRANSACTIONS', fetchTransactions);
    yield takeEvery('SAGA_DELETE_TRANSACTION', delTransaction);
    yield takeEvery('SAGA_ADD_TRANSACTION', addNewTransaction);
}

export default expanseTrackerSaga;