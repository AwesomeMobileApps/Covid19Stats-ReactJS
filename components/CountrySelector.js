import { useState } from 'react';
import config from '../config';
import Stats from './Stats';
import { ISO3Codes } from '../utils/countries';

export default () => {
    const [selectedCountryCode, setSelectedCountryCode] = useState(config.defaultCountry);

    return (
        <div>
            <select onChange={e => setSelectedCountryCode(e.target.value)}>
                {Object.entries(ISO3Codes).map(([code, countryName]) => (
                    <option
                        defaultValue={selectedCountryCode === code}
                        key={code} value={code}>
                        {countryName}
                    </option>
                ))
                }
            </select>
            <Stats
                countryName={ISO3Codes[selectedCountryCode]}
                url={`${config.apiUrl}countries/${selectedCountryCode}`}
            />
        </div>
    );
}
