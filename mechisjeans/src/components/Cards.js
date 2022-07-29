import React from 'react';
import Card from './Card';

export default function Cards (props){
    return (
        <div className='container-xl'>
            <section className='page-content'>
            {
            props.info.map( c =>
                <Card
                    img = {c.imagen}
                    titulo = {c.titulo}
                    precio = {c.precio}
                />
                )
            }
            </section>
        </div>
    )
}