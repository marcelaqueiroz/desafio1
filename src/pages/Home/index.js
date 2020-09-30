import React from 'react';
import Page from '../../components/Page';
import hobbies from './hobbies';
import "../../App.css";

export default function index() {

    return (
        <Page title="Sobre mim">
            <p>
                Meu nome é Marcela e, além da minha esposa e dos meus cachorros, tenho
                mais duas paixões na vida: dados e fotografia.
            </p>

            <h6 className="h6-special">Meus hobbies</h6>
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

