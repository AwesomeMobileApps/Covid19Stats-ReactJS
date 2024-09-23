import { useState, useEffect } from 'react';

export default (apiUrl) => {
  const [stats, setStats] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const results = await fetch(`${apiUrl}`);
      console.log(`Fetching data for: ${apiUrl}`);
      setStats(await results.json());
    } catch (err) {
      setIsError(err)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [apiUrl]);

  return {
    stats,
    isError,
    isLoading
  };
}
