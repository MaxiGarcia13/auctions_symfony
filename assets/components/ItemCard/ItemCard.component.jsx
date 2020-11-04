import React, { memo } from 'react';

const CardComponent = ({ title, picture, description, value, onClick, children }) => {
    const handleClickCard = () => typeof onClick === 'function' && onClick();

    return (
        <article onClick={handleClickCard} className='listItem card'>
            <div className='imageWrapper'>
                <img src={picture} alt='Auction image' className='image' />
            </div>
            <div className='itemDescription'>
                <h2>{title}</h2>
                <p>{description}</p>
                <h3>{value}€</h3>
            </div>
            {children}
        </article>
    );
};

export default memo(CardComponent);
