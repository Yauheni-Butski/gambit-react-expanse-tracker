import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/store';

//ReduxProvider component
export const ReduxProvider = ({ children }) => {

   var store = configureStore();

    return (
            <Provider store={store}>
                    {children}
            </Provider>
    );
}
