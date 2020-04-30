import React, { useEffect, useState } from 'react';
import ReactComponent from './RecipeComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const APP_ID = 'c84ed816';
  const APP_KEY = '891afc23935ac9ec73807f5369e6280a';

  const [hits, setHits] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setHits(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="mainBox">
      <div className="container-fluid">
        <form onSubmit={getSearch} className="row">
          <input className="col-4 m-3" type="text" value={search} onChange={updateSearch} />
          <button className="col-1 m-3" type="submit">Search</button>
        </form>
        <div className="row">
          {
            hits.map(hit => (
              <ReactComponent
                label={hit.recipe.label}
                calories={hit.recipe.calories}
                url={hit.recipe.url}
                image={hit.recipe.image}
                ingredients = {hit.recipe.ingredients}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
