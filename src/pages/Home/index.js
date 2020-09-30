import React from 'react';
import Page from '../../components/Page';
import hobbies from './hobbies';

export default function index() {

    return (
        <Page title="Hello World">
            <h2>Sobre mim</h2>
            <p>
                Meu nome é Marcela e, além da minha esposa e dos meus cachorros, tenho
                mais duas paixões na vida: dados e fotografia.
            </p>

            <h2>Meus hobbies</h2>
            <ol> 
            {
                hobbies.map(({value}, index) => (
                    <li key={index}> {value} </li>
                ))
            }
            </ol>
        </Page>
    )
}

