import { useState, useEffect } from 'react';

export default (apiUrl) => {
    const [isStats, setIsStats] = useState();
    const [isLoading, setIsLoading] = useState(false); // Default value of loading is `false`
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            console.log('Fetching Data');
            setIsError();
            setIsLoading(true);
            const results = await fetch(`${apiUrl}`).then(
                response => response.json()
            ).catch(err => {
                setIsError(err)
            });
            setIsStats(results);
            setIsLoading(false);
        }
        fetchData();
    }, [apiUrl]);

    return {
        isStats,
        isLoading,
        isError
    };
}
