import React from 'react';
import Page from '../../components/Page';
import {Button, Form, Label, Input, FormGroup} from 'reactstrap';
import { withRouter } from 'react-router-dom';

function index(props) {
    function onSubmit () {
        props.history.push('/')
    }

    return (
        <Page title="Recupere sua senha">
            <p> Informe seu e-mail:</p>
            <Form>
                <FormGroup>
                    <Input type="email" name="email" id="email" placeholder="Insira seu e-mail" />
                </FormGroup>
                <Button className="submit-button" type="button" onClick={onSubmit}>Enviar</Button>
            </Form>
        </Page>
    )
}

export default withRouter(index)