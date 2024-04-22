import React from 'react'
import './LoginSignUp.css'
const LoginSignUp = () => {
    return (
        <div className="login-container">
            <h1>Welcome to Shopping Lists App</h1>
            <p>This is a web application for managing shopping lists.</p>
            <div>
                <h2>Login</h2>
                <form className="login-form">
                    <label>
                        Email:
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" />
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
            <div>
                <h2>Sign Up</h2>
                <form className="signup-form">
                    <label>
                        Email:
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" />
                    </label>
                    <label>
                        Confirm Password:
                        <input type="password" name="confirmPassword" />
                    </label>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default LoginSignUp