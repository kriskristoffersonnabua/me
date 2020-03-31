import React from 'react';

const SectionTitle = props => {
    return (
        <h3
            style={{
                margin: 'inherit',
                fontFamily: 'Roboto Mono',
                padding: '0px 20px',
                textAlign: 'center'
            }}
        >
            {props.title}
        </h3>
    );
};

export default SectionTitle;
