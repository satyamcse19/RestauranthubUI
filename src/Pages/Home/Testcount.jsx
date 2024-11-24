import React, { useState } from 'react';

export const Testcount = () => {
    let [numCount ,setCount]=useState(0);

    const increaseNumCount = () => {
        setCount(numCount+1);
    };

    return (
        <div>
            <h1 style={{ background: 'white', color: 'red' }}>
                Count Click: {numCount}
            </h1>
            <button 
                onClick={increaseNumCount} 
                style={{
                    backgroundColor: 'green', 
                    color: 'white', 
                    padding: '10px', 
                    border: 'none', 
                    cursor: 'pointer'
                }}>
                Increase number
            </button>
        </div>
    );
};
