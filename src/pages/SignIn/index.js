import React, { useState } from 'react';
import Page from '../../components/Page';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

function Index(props) {
    
    const [form, setForm] = useState({
        user: "",
        password: ""
    }); 
    
    const onChange = (event) => {
        const {
            target: { name, value }
        } = event;

        setForm({
            ...form,
            [name]: value
        });
    };

    const onSubmit = () => {
        if (form.user === "marcela" && form.password === "123456") {
            props.history.push('/home');
        } else {
            alert("Usuário e/ou senha não correspondem!");
        }
    }

    const handleReset = () => {
        Array.from(document.querySelectorAll("target")).forEach(
          target => (target.value = "")
        );
        setForm({
          value: [{}]
        });
      };

    return (
        <Page title="Login">
            <Form>
                <FormGroup>
                    <Label htmlFor="user">Usuário</Label>
                    <Input value={form.user} name="user" id="user" onChange={onChange} placeholder="Insira seu usuário" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Senha</Label>
                    <Input value = {form.password} type="password" name="password" id="password" onChange={onChange} placeholder="Insira sua senha" />
                </FormGroup>
                <Link to="/forgotpassword" className="link-custom"> Esqueci minha senha</Link> <br /><br />
                <Button color='secondary' type="reset" onClick={handleReset}>Limpar</Button>{' '}
                <Button className="submit-button" type="button" onClick={onSubmit} >Entrar</Button>
            </Form>
        </Page>
    )
}

export default withRouter(Index)