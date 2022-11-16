import React from 'react';

import {Info} from "./Info";
import {useDetails} from "./useDetails";


const CountryDetails = ({name = '', navigate}) => {
    const {status, error, currentCountry} = useDetails(name);

    return (
        <>
            {error && <h2>{error}</h2>}

            {status === 'loading' && <h2>Loading...</h2>}

            {currentCountry && <Info push={navigate} {...currentCountry} />}
        </>
    );
};

export default CountryDetails;