import styled from 'styled-components';
import retrieveStats from '../utils/retrieveStats';

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const StatBlock = styled.div`
  background: #f2f2f2;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

export default ({ url, countryName }) => {
    const { stats, isError } = retrieveStats(url);

    if (!stats) {
        return <p>Loading...</p>;
    }

    if (!isError) {
        return <p>Oops! An error occurred :(</p>;
    }

    return (
        <StatGrid>
            <h2>{countryName}</h2>
            <p>Last Update: <em>{stats.lastUpdate}</em></p>

            <StatBlock>
                <h3>Confirmed:</h3>
                <span>{stats.confirmed.value}</span>
            </StatBlock>

            <StatBlock>
                <h3>Recovered:</h3>
                <span>{stats.recovered.value}</span>
            </StatBlock>

            <StatBlock>
                <h3>Deaths:</h3>
                <span>{stats.deaths.value}</span>
            </StatBlock>
        </StatGrid>
    );
}
