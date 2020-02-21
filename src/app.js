import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from '../src/routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
// import './playground/promises';
import './firebase/firebase';

const store = configureStore();

console.log('test')
const jsx = (
    <Provider store={store}> 
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p> Loading..</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(()=> {
    ReactDOM.render(jsx, document.getElementById("app"));
});

