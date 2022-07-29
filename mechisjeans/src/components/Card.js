import React from 'react';
import '../styles/card.css';
export default function Card (props){
    return (
        <article className='product-container'>
            <h2>{props.titulo}</h2>
            <img src={props.img} alt="img not found"/>
            <h3 className='precio'>${props.precio}</h3>
            <button  className='button-add'>Comprar</button>
        </article>
    )
}