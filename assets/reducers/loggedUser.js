import { SET_LOGGED_USER } from '../actions/loggedUser';

const initialState = {
    data: {
        id: null,
        displayName:'',
        email:'',
        roles:[]
    },
};

export default (store = initialState, action) => {
    switch (action.type) {
        case SET_LOGGED_USER:
            return {
                ...store,
                data: action.payload.loggedUser,
            };

        default:
            return store;
    }
};
