/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';


// eslint-disable-next-line import/prefer-default-export
export const Square = ({value,children}) => {

    return (
        <button type="button" className='square'>{children}{value}</button>
    )
}
