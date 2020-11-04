export const SET_LOGGED_USER = 'GET_LOGGED_USER';

/**
 * @param {Object} loggedUser
 */
export const setLoggedUser = (loggedUser) => {

    return {
        type: SET_LOGGED_USER,
        payload: {
            loggedUser
        },
    };
};
