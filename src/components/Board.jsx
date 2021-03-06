/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Square } from './Square';

export const Board = () => {
  return (
    <div className='board'>
      <div className='board-row'>
        <Square value={0} />
        <Square value={1} />
        <Square value={2} />
      </div>
      <div className='board-row'>
        <Square value={3} />
        <Square value={4} />
        <Square value={5} />
      </div>
      <div className='board-row'>
        <Square value={6} />
        <Square value={7} />
        <Square value={8} />
      </div>
    </div>
  );
};
