import React, { memo, useRef, useEffect, useState } from 'react';
import Input from '../Input';
import { useApi } from '../../hooks/useApi';
import { useParams } from 'react-router-dom';
import '../../styles/list.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const UserAuctionComponent = ({ user_id }) => {
    const bid = useRef(null);
    const { isLoading, data, error, execute } = useApi();

    const history = useHistory();

    let params = useParams();

    const handleOnsubmit = async (ev) => {
        ev.preventDefault();

        if (+bid.current.value <= data.last_bid) {
            return;
        }

        await execute(`http://localhost:8000/bid`, {
            method: 'POST',
            body: JSON.stringify({
                bid: bid.current.value,
                auction_id: data.id,
                user_id,
            }),
        });

        history.push('/');

        ev.stopPropagation();
    };

    useEffect(async () => {
        if (params.id) {
            await execute(`http://localhost:8000/auction/${params.id}`, {});
        }
    }, [params.id]);

    return (
        <main className='formMainWrapper'>
            {typeof data === 'object' && Object.keys(data).length > 0 && (
                <div className='listWrapper'>
                    <article className='listItem card'>
                        <div className='imageWrapper'>
                            <img src={data.picture} alt='Auction image' className='image' />
                        </div>
                        <div className='itemDescription'>
                            <h2>{data.name}</h2>
                            <p>{data.description}</p>
                            <h3>{data.last_bid}€</h3>
                        </div>
                        <form onSubmit={handleOnsubmit}>
                            <Input ref={bid} label='Bid' placeholder='Enter a Bid' required />
                            {error && <span className='hint-message center'>🚨 An error has ocurred</span>}
                            <Input
                                type='submit'
                                value='Bid'
                                className={`button primary ${isLoading && 'loading'}`}
                                disabled={isLoading}
                            />
                        </form>
                    </article>
                </div>
            )}
        </main>
    );
};

export default memo(UserAuctionComponent);
