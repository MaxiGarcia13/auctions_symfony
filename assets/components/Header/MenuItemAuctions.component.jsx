import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { loggedUserSelector } from '../../selectors/loggedUser';

const MenuItemAuctions = () => {
    const loggedUser = useSelector(loggedUserSelector);

    const isAdmin = useMemo(() => {
        if (Array.isArray(loggedUser.roles) && loggedUser.roles.length) {
            return loggedUser.roles.some((role) => role === 'ADMINISTRATOR');
        } else {
            return false;
        }
    }, [loggedUser]);

    return isAdmin ? <Link to='/createAuctions'> Create auctions </Link> : <Link to='/myBids'>My bids</Link>;
};

export default memo(MenuItemAuctions);
