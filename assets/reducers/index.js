import { combineReducers } from 'redux';

import loggedUser from './loggedUser';

const rootReducers = combineReducers({ loggedUser });

export default rootReducers;
