import React, { memo } from 'react';
import LoggedUser from './LoggedUser.component';
import Menu from './Menu.component';

const HeaderComponent = ({ loggedUser, signInPath }) => {
    return (
        <header className='header'>
            <div className='brand'>
                <h1>💸 Auctions!</h1>
                <LoggedUser email={loggedUser} />
            </div>
            <Menu signInPath={signInPath} />
        </header>
    );
};

export default memo(HeaderComponent);
