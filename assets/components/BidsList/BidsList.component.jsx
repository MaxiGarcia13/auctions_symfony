import React, { memo, useCallback, useEffect } from 'react';
import Card from './Card.component';
import List from '../List';
import { useApi } from '../../hooks/useApi';
import '../../styles/list.css';
import { useSelector } from 'react-redux';
import { loggedUserSelector } from '../../selectors/loggedUser';

const url = 'http://localhost:8000/bid/users';

const BidsListComponent = () => {
    const { isLoading, data, error, execute } = useApi();

    const loggedUser = useSelector(loggedUserSelector);

    const getBits = useCallback(() => loggedUser.id && execute(`${url}/${loggedUser.id}`, {}), [
        execute,
        loggedUser.id,
    ]);

    useEffect(() => {
        getBits();
    }, [getBits]);

    return (
        <main className='listMainWrapper'>
            <List isLoading={isLoading} error={error} data={data} item={Card} getBits={getBits} />
        </main>
    );
};

export default memo(BidsListComponent);
