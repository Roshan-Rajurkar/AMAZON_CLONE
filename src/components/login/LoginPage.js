import React, { useState } from 'react'
import './LoginPage.css'
import PrimeLogo from '../../assets/primeLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase';

const LoginPage = () => {


    // useHistory Hook
    const navigate = useNavigate(); // it will help us in the navigation

    // email and password state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // signing in in the application
    const signIn = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                // alert(user.user.multiFactor.user.email);
                if (user) {
                    navigate('/')
                }
            })
            .catch((err) => alert(err.message))

        // login through the firebase

    }

    // registering in in the application
    const register = (e) => {
        e.preventDefault();

        // registering through the firebase
        auth.createUserWithEmailAndPassword(email, password) // this will create the user in the firebase
            .then((user) => {
                console.log(user); // after successfully creating user in the firebase it will return the auth object

                // if the use successfully get register and we found the user as a result then we are pushing to the home navigation
                if (user) {
                    alert("Your account created Now Try to sign In");
                    navigate('/')
                }
            })
            .catch((err) => alert(err.message))

    }

    return (

        <div className='login'>

            <img
                className='login__logo'
                src={PrimeLogo}
                alt='primezone logo'
            />

            <div className='login__container'>
                <h1>Sign-In</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Link to='/'>
                        <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                    </Link>
                </form>
                <p>By signing-in you agree to the PRIMEZONE conditions of Use and Sale.</p>
                <button className='login__registerButton' onClick={register}>Create your Account</button>
            </div>

        </div>

    )
}

export default LoginPage;