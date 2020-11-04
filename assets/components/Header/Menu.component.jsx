import React, { memo, useMemo } from 'react';
import MenuItemAuctions from './MenuItemAuctions.component';
import { Link } from 'react-router-dom';

const MenuComponent = ({ signInPath }) => {
    const MenuItems = useMemo(
        () => (
            <>
                <Link to='/'>Auctions</Link>
                <MenuItemAuctions />
                <a href={signInPath}>Sign out</a>
            </>
        ),
        []
    );

    return (
        <>
            <nav className='menu'>{MenuItems}</nav>
            <nav className='menu-collapse'>
                <details>
                    <summary>📚 Menu</summary>
                    <div className='items'>{MenuItems}</div>
                </details>
            </nav>
        </>
    );
};

export default memo(MenuComponent);
