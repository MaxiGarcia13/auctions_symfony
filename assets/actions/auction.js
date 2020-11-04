export const SET_AUCTION = 'SET_AUCTION';
export const CLEAR_AUCTION = 'CLEAR_AUCTION';

/**
 * @param {Object} auction
 */
export const setAuction = (auction) => {

    return {
        type: SET_AUCTION,
        payload: {
            auction
        },
    };
};

export const clearAuction = () => ({
    type: CLEAR_AUCTION,
});
