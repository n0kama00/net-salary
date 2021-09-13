import React from 'react';

export default function FillOptions(){
    const percentages = [];
    for (let i = 0; i <=5; i = 1 + 0.25){
        percentages.push(i);
    }

    return (
        percentages.map(percentage => {
            return <option value={percentage}>{percentage.toFixed(2)} %</option>
        })
    )
}