import React, { useState } from 'react'
import './LoginPage.css'
import PrimeLogo from '../../assets/primeLogo.png'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    // email and password state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // signing in in the application
    const signIn = (e) => {
        e.preventDefault();

        // login through the firebase

    }

    // registering in in the application
    const register = (e) => {
        e.preventDefault();

        // registering through the firebase

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