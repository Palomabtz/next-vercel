import React, { FC } from 'react'

export const DarkLayout: FC = ({ children }) => {
  return (
    <div style={{backgroundColor: 'darkblue', borderRadius: '5px', padding: '10px'}}>
        <h3>Dark layout</h3>
        <div>
        {children}
        </div>
    </div>
  );
}
