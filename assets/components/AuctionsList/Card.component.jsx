import React, { memo } from 'react';
import ItemCard from '../ItemCard';
import { useHistory } from 'react-router-dom';

const CardComponent = ({ id, name, picture, description, last_bid }) => {
    const history = useHistory();

    const handleClickCard = () => history.push(`/auctions/${id}`);

    return (
        <ItemCard title={name} picture={picture} description={description} value={last_bid} onClick={handleClickCard} />
    );
};

export default memo(CardComponent);
