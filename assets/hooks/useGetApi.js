import { useState, useCallback } from 'react';

export const getApi = async (url, options) => {
    const response = await fetch(url, options);

    if(response.status === 403) window.location.href = "signOut";

    const data = await response.json();

    return data;
};

export const useGetApi = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState({});

    const execute = async (url, options = {}) => {
        try {
            setIsLoading(true);
            const {data, success} = await getApi(url, options);

            if(!success) {
                throw new Error('ERROR')
            }
            setData(data);
            setIsLoading(false);
            return data;

        } catch (error) {
            setError(error);
            setIsLoading(false);
            throw error;
        }
    };

    return {
        isLoading,
        error,
        data,
        execute: useCallback(execute, [])
    };
};