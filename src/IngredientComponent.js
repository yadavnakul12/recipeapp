import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const IngredientComponent = ({ ingredient }) => {
    return (
        <tr>
            <td>{ingredient.text}</td>
        </tr>
    );
}

export default IngredientComponent;