import React from 'react';
import styles from './Recipe.module.scss';

function Recipe() {
  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img
          src="https://github.com/dymafr/react-chapitre05-cookchef-partie1/blob/master/src/assets/images/recette.jpg?raw=true"
          alt="recipe"
        />
      </div>
      <div
        className={`${styles.recipeTitle} d-flex flex-row justify-content-center align-items-center`}
      >
        <h3>Saumon et asperges</h3>
      </div>
    </div>
  );
}

export default Recipe;