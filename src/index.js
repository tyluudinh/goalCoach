/**
 * Created by dinhty.luu@gmail.com on 20/8/17.
 */
import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

//Redux and actions
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import {logUser} from './actions'

//Component
import App from "./components/App";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import {firebaseApp} from './firebase'

//Style
import "!style-loader!css-loader!./../public/assets/css/style.css";

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
    if(user){
        const {email} = user;
        store.dispatch(logUser(email));
        browserHistory.push('/app');
    }else {
        browserHistory.replace('/signIn');
    }
});
ReactDom.render(
    <Provider store={store}>
        <Router path="/" history={browserHistory} >
            <Route path={'/app'} component={App}/>
            <Route path={'/signIn'} component={SignIn}/>
            <Route path={'/signUp'} component={SignUp}/>
        </Router>
    </Provider>
    , document.getElementById('root')
);