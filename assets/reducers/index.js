import { combineReducers } from 'redux';

import loggedUser from './loggedUser';
import auction from './auction';

const rootReducers = combineReducers({ loggedUser, auction });

export default rootReducers;
