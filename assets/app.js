import React, {useEffect, useMemo} from 'react';
import Header from './components/Header'
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import configureStore from './store';
import './styles/app.css';

const store = configureStore();
const element =  document.getElementById('react-component-root');

const AppComonent = ()=> {
    const loggedUser = useMemo(()=> element.dataset['loggedUser']);
    const signInPath = useMemo(()=> element.dataset['pathLogOut']);

    return (
        <Provider store={store}>
            <Router>
                <Header loggedUser={loggedUser} signInPath={signInPath}/>
                <Switch>
                    <Route path="/myAuctions">
                        My Auctions...
                    </Route>
                    <Route path="/createAuctions">
                        Create Auctions...
                    </Route>
                    <Route path="/" >
                        Auctions...
                    </Route>
                </Switch>
            </Router>
        </Provider>
    )
}

ReactDom.render(<AppComonent />, element);