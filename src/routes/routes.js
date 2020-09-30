import React from 'react';
import Home from '../pages/Home';
import ForgotPassword from '../pages/ForgotPassword';
import SignIn from '../pages/SignIn';

const routes = [{ 
    name: 'Home',
    component: Home,
    path: '/home',
    navbar: false,
}, { 
    name: 'Esqueci minha senha',
    component: ForgotPassword,
    path:'/forgotpassword',
    navbar: false,
}, { 
    name: 'Login',
    component: SignIn,
    path:'/',
    navbar: false,
}];

export default routes;