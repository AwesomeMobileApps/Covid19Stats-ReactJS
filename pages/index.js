import config from '../config';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';

export default function Index() {
    return (
        <div>
            <Stats
                countryName=""
                url={config.apiUrl}
            />
            <CountrySelector />
        </div>
    )
}
