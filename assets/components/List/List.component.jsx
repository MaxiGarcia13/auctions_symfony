import React, { memo } from 'react';
import Skeleton from 'react-loading-skeleton';

const ListComponent = ({ data, error, isLoading, item: Item, ...props }) => {
    return (
        <div className='listWrapper'>
            {error ? (
                <span className='hint-message'>🚨 An error has occuredd</span>
            ) : Array.isArray(data) && !isLoading ? (
                data.length > 0 ? (
                    data.map((item) => <Item key={item.id} {...item} {...props} />)
                ) : (
                    <span className='hint-message'>😱 Empty..</span>
                )
            ) : (
                <Skeleton count={6} className='card' />
            )}
        </div>
    );
};

export default memo(ListComponent);
