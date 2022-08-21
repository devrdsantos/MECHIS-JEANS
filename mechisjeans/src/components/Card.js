import React from 'react';
import '../styles/card.css';
import corazonLleno from "../assets/corazonLleno.png"
import corazonVacio from "../assets/corazonVacio.png"


export default function Card (props){
    return (
        <article className='product-container'>
            {/*<div className='position-absolute'>
                <img src={corazonVacio} alt="img not found"/>
                <img src={corazonLleno} alt="img not found"/>
            </div>*/}
            <img src={props.img} alt="img not found"/>
            <h3>{props.titulo}</h3>
            <h3 className='precio'>${props.precio}</h3>
            <button  className='button-add'> Comprar </button>
        </article>
    )
}