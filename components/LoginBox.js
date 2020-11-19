import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import styles from './LoginBox.module.css'
import {switchLogin} from '../actions'

function LoginBox() {

    const [loginForm, setLoginForm] = useState(true);
    const dispatch = useDispatch();

    let form;
    let loginButtonBackground;
    let registerButtonBackground;
    
    if (loginForm) {
        form = <LoginForm />
        loginButtonBackground = " dark-background";
        registerButtonBackground = " dark-background-secondary";
    } else {
        form = <RegisterForm />
        loginButtonBackground = " dark-background-secondary";
        registerButtonBackground = " dark-background";
    }

    const handleSubmit = () => {
        console.log("SUBMITTING!");
        dispatch(switchLogin());
    }

    return (
        <div className={
            styles.loginBoxContainer
            + " white-background"
            }>
            <div className={
                styles.switchButtonsContainer
                + " secondary-font-family"
                + " dark-background"
                }
            >
                <button 
                    className={
                        styles.switchButton
                        + " light-text-color"
                        + loginButtonBackground
                        + " light-border-color" 
                    }
                    onClick={() => setLoginForm(true)}
                >
                    LOGIN
                </button>

                <button 
                    className={
                        styles.switchButton
                        + " light-text-color"
                        + registerButtonBackground
                        + " light-border-color" 
                    }
                    onClick={() => setLoginForm(false)}
                >
                    REGISTER
                </button>
            </div>
            <div className={styles.formContainer}>
                {form}
            </div>
            <div className={styles.submitButtonContainer}>
                <button className={
                    styles.submitButton
                    + " light-text-color"
                    + " dark-background-hover"
                    }
                    onClick={handleSubmit}
                >
                    SUBMIT
                </button>
            </div>
        </div>
    );
}

export default LoginBox;