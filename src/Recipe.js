import React from "react";
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <img className={style.image} src={image} alt=""/>
            <p><b>Calories: </b>{calories}</p>
            <ol>
                {ingredients.map(ingredients => (
                    <li className={style.ingredient}>{ingredients.text}</li>
                ))}
            </ol>
        </div>
    );
}

export default Recipe;