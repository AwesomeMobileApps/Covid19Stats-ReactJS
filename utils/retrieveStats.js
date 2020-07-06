import { useState, useEffect } from 'react';

export default (apiUrl) => {
    const [stats, setStats] = useState();
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            console.log('Fetching Data');
            setIsError();
            const results = await fetch(`${apiUrl}`).then(
                response => response.json()
            ).catch(err => {
                setIsError(err)
            });
            setStats(results);
        }
        fetchData();
    }, [apiUrl]);

    return {
        stats,
        isError
    };
}
