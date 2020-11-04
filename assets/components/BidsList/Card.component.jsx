import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import ItemCard from '../ItemCard';

const CardComponent = ({ id, value, auction, getBits }) => {
    const history = useHistory();

    const { isLoading, error, execute } = useApi();

    const handleCancel = async (ev) => {
        ev.preventDefault();

        await execute(`http://localhost:8000/bid/${id}`, { method: 'DELETE' });
        if (typeof getBits === 'function') {
            getBits();
        }
    };

    return (
        <ItemCard
            title={auction.name}
            picture={auction.picture}
            description={auction.description}
            value={`My bit ${value}€  | Current bit ${auction.last_bid}`}
        >
            {error && <span>🚨 An error has ocurred</span>}
            <button className={`button ${isLoading && 'loading'}`} disabled={isLoading} onClick={handleCancel}>
                {isLoading ? '...' : 'Cancel'}
            </button>
        </ItemCard>
    );
};

export default memo(CardComponent);
