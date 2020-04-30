import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import IngredientComponent from './IngredientComponent';

const ReactComponent = ({ label, image, url, calories, ingredients }) => {

    return (
        <div className="card col-4 m-3">
            <img src={image} className="img-thumbnail" alt="..."></img>
            <div className="card-body">
                <h4 className="card-title">{label}</h4>
                <div className="card-text">
                    <label htmlFor={calories}>Calories</label><a id={calories}>{` ${calories}`}</a>
                    <div>
                    <label>Ingredients</label>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Name and quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ingredients.map(curIngrediant => (
                                        <IngredientComponent ingredient={curIngrediant} />
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <a href={url} className="btn btn-primary">Detailed Recipe</a>
            </div>
        </div>
    );
}

export default ReactComponent;