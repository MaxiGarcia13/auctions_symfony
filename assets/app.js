import React, {useEffect, useMemo} from 'react';
import Header from './components/Header';
import AuctionManagment from './components/AuctionManagment';
import AuctionsList from './components/AuctionsList';
import BidsList from './components/BidsList';
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
                    <Route path="/myBids">
                        <BidsList />
                    </Route>
                    <Route path="/createAuctions">
                        <AuctionManagment />
                    </Route>
                    <Route path="/auctions/:id">
                        <AuctionManagment />
                    </Route>
                    <Route path="/" >
                        <AuctionsList />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    )
}

ReactDom.render(<AppComonent />, element);