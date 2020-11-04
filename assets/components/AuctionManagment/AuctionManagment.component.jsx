import React, { memo, useRef, useEffect, useState, useMemo } from 'react';
import Input from '../Input';
import { useApi } from '../../hooks/useApi';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auctionDataSelector } from '../../selectors/auction';
import { setAuction, clearAuction } from '../../actions/auction';

import '../../../public/styles/form.css';
import '../../styles/form.css';

const AuctionManagmentComponent = () => {
    let history = useHistory();
    let params = useParams();

    const dispatch = useDispatch();
    const auctionSelector = useSelector(auctionDataSelector);
    const { isLoading, error, execute } = useApi();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [initialValue, setInitialValue] = useState(0);
    const [isDeleted, setIsDeleted] = useState(false);

    const isNew = useMemo(() => typeof params.id !== 'string', [params.id]);

    const handleSetName = (ev) => setName(ev.target.value);
    const handleSetDescription = (ev) => setDescription(ev.target.value);
    const handleSetInitialValue = (ev) => setInitialValue(ev.target.value);

    const handleOnsubmit = async (ev) => {
        ev.preventDefault();

        let url = 'http://localhost:8000/auction';

        let method = 'POST';

        if (!isNew) {
            url += `/${auctionSelector.id}`;
            method = 'PUT';
        }

        const response = await execute(url, {
            method,
            body: JSON.stringify({
                name: name,
                description: description,
                initial_value: +initialValue,
                picture: auctionSelector.picture,
            }),
        });

        dispatch(setAuction(response));
        history.push(`/auctions/${response.id}`);

        ev.stopPropagation();
    };

    const handleDelete = async (ev) => {
        ev.preventDefault();

        const url = `http://localhost:8000/auction/${auctionSelector.id}`;
        const method = 'DELETE';

        try {
            setIsDeleted(true);
            await execute(url, {
                method,
            });
        } catch (error) {
            setIsDeleted(false);
        }

        history.push('/');

        ev.stopPropagation();
    };

    useEffect(async () => {
        if (params.id && !isDeleted) {
            if (auctionSelector.id) {
                setName(auctionSelector.name);
                setDescription(auctionSelector.description);
                setInitialValue(auctionSelector.initial_value);
            } else {
                const response = await execute(`http://localhost:8000/auction/${params.id}`, {});
                dispatch(setAuction(response));
            }
        }
    }, [auctionSelector]);

    useEffect(() => {
        return () => {
            dispatch(clearAuction());
        };
    }, []);

    return (
        <main className='formMainWrapper'>
            <form className='card form-card' onSubmit={handleOnsubmit}>
                <h2>✏️ Auction Managment</h2>
                <div className='imageWrapper'>
                    <img src={auctionSelector.picture} alt='Auction image' className='image' />
                </div>

                <Input
                    value={name}
                    onChange={handleSetName}
                    label='Name (*)'
                    placeholder='Enter auction name'
                    isLoading={isLoading}
                    required
                />
                <Input
                    value={description}
                    onChange={handleSetDescription}
                    label='Description'
                    placeholder='Enter auction description'
                    isLoading={isLoading}
                />
                <Input
                    value={initialValue}
                    onChange={handleSetInitialValue}
                    label='Initial value (*)'
                    type='number'
                    placeholder='Enter auction initial value'
                    disabled={!isNew}
                    isLoading={isLoading}
                    required
                />

                {error && <span className='hint-message center'>🚨 An error has ocurred</span>}
                <div className='flex'>
                    {!isNew && (
                        <Input
                            type='submit'
                            value='Delete'
                            className={`button delete-button ${isLoading && 'loading'}`}
                            disabled={isLoading}
                            onClick={handleDelete}
                        />
                    )}
                    <Input
                        type='submit'
                        value='Submit'
                        className={`button primary ${isLoading && 'loading'}`}
                        disabled={isLoading}
                    />
                </div>
            </form>
        </main>
    );
};

export default memo(AuctionManagmentComponent);
