import React, { memo, forwardRef } from 'react';
import Skeleton from 'react-loading-skeleton';

const InputComponent = ({ id = Math.random(), label, isLoading, ...props }, ref) => {
    return (
        <div className='formController'>
            {!isLoading ? (
                <>
                    <label className='label' htmlFor={id}>
                        {label}
                    </label>
                    <input ref={ref} className='input' id={id} {...props} />
                </>
            ) : (
                <>
                    <Skeleton height='12px' width='40%' />
                    <Skeleton height='30px' width='100%' />
                </>
            )}
        </div>
    );
};

export default memo(forwardRef(InputComponent));
