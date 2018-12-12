import React from 'react';

const testComponent = ({name}) => (
    <div>
        {console.log(55,process.env.REACT_APP_CRYPTO_KEY)}
        <p>sup 22 {name}</p>
    </div>
);

export default testComponent;
