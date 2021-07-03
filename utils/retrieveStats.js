import { useState, useEffect } from 'react';

export default (apiUrl) => {
    const [stats, setStats] = useState();
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsError(false);
                const results = await fetch(`${apiUrl}`);
                console.log('Fetching Data ...');
                setStats(results.json());
            } catch (err) {
                setIsError(err)
            }
        }
        fetchData();
    }, [apiUrl]);

    return {
        stats,
        isError
    };
}
