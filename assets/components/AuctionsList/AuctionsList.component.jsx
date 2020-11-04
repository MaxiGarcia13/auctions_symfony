import React, { memo, useEffect, useRef } from 'react';

import Card from './Card.component';
import List from '../List';

import { useApi } from '../../hooks/useApi';
import '../../styles/list.css';

const url = 'http://localhost:8000/auction';

const AuctionsListComponent = () => {
    const { isLoading, data, error, execute } = useApi();

    const queryName = useRef(null);

    const handleEnter = (ev) => {
        if (ev.charCode === 13) {
            handleSearch();
        }
    };

    const handleSearch = () => {
        let ulrWithParams = url;

        if (queryName.current.value.length) {
            ulrWithParams += `?name=${queryName.current.value}`;
        }

        execute(ulrWithParams, {});
    };

    useEffect(() => {
        execute(url, {});
    }, [execute]);

    return (
        <main className='listMainWrapper'>
            <div className='filterWrapper'>
                <input
                    ref={queryName}
                    type='text'
                    className='input'
                    placeholder='Search by name'
                    onKeyPress={handleEnter}
                />
                <button onClick={handleSearch}>🔍</button>
            </div>
            <List isLoading={isLoading} error={error} data={data} item={Card} />
        </main>
    );
};

export default memo(AuctionsListComponent);
