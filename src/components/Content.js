import React, { useState } from 'react';
import styles from './Content.module.scss';
import Recipe from './Recipe';
import { data } from '../data/recipes';

function Content() {
  const [filter, setFilter] = useState('');

  const recipes = data; 
  const handleInput = (evt) => {
    // console.log(evt.target.value)
    const filter = evt.target.value;
    setFilter(filter.trim().toLowerCase());
  };

  return (
    <div className="flex-fill d-flex flex-column container p-20">
      <h1 className={`my-30 ${styles.title}`}>Découvrez nos nouvelles recettes</h1>
      <div className={`${styles.contentCard} d-flex flex-fill flex-column card p-20`}>
      <div className={`flex flex-row justify-content-center align-items-center my-30 ${styles.searchBar}`}>
        <i className='fa solid fa-magnifying-glass mr-15'></i>
        <input className='flex-fill' type="text" placeholder='Rechercher' onInput={ handleInput }/>
      </div>
        <div className={styles.grid}>
          {
            recipes.filter(r => r.title.toLowerCase().startsWith(filter)).map(recipe => (
              <Recipe key={recipe._id} title={recipe.title} image={recipe.image} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Content;