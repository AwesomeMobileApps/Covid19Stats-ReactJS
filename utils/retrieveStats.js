import { useState, useEffect } from 'react';

export default (apiUrl) => {
    const [stats, setStats] = useState();
    const [isError, setIsError] = useState(false);

    const fetchData = async () => {
        try {
            setIsError(false);
            const results = await fetch(`${apiUrl}`);
            console.log(`Fetching data for ${apiUrl}`);
            setStats(results.json());
        } catch (err) {
            setIsError(err)
        }
    };

    useEffect(() => {
        fetchData();
    }, [apiUrl]);

    return {
        stats,
        isError
    };
}
