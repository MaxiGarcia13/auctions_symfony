import React, { memo, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useApi } from '../../hooks/useApi';
import { useDispatch } from 'react-redux';
import { setLoggedUser } from '../../actions/loggedUser';

const LoggedUserComponent = ({ email }) => {
    const { isLoading, data, execute, error } = useApi();
    const dispatch = useDispatch();

    useEffect(() => {
        execute(`http://localhost:8000/users/${email}`, {});
    }, [execute]);

    useEffect(() => {
        if (Object.keys(data).length) {
            dispatch(setLoggedUser(data));
        }
    }, [data]);

    return (
        <div className='text large'>
            {isLoading ? (
                <Skeleton height='12px' width='100px' />
            ) : error ? (
                <a href='/'>🚨 An error has ocurred, try again</a>
            ) : (
                `🧑🏼‍🎨 ${data.displayName}`
            )}
        </div>
    );
};

export default memo(LoggedUserComponent);
