import React from 'react';
import { useMealContext } from '../../hooks/useMealContext';

const MealCard = ({ meal }) => {
    return (
        <div
            style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '10px',
                margin: '10px',
                maxWidth: '300px',
            }}
        >
            <h3>{meal.name}</h3>
            <p>Calories: {meal.calories}</p>
        </div>
    );
};

export default MealCard;
