import { SET_AUCTION, CLEAR_AUCTION } from '../actions/auction';

const initialState = {
    data: {
        id: null,
        name:'',
        description:'',
        initial_value:0,
        picture: 'http://localhost:8000/images/art.svg'
    },
};

export default (store = initialState, action) => {
    switch (action.type) {
        case CLEAR_AUCTION: {
            return {
                ...store,
                data: initialState.data
            }
        }
        case SET_AUCTION:
            return {
                ...store,
                data: {
                    ...store.data,
                    ...action.payload.auction,
                    picture: 'http://localhost:8000/images/art.svg'
                },
            };

        default:
            return store;
    }
};
