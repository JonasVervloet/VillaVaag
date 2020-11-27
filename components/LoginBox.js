import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import styles from './LoginBox.module.css'
import {switchLogin} from '../actions'
import {registerUser, loginUser} from '../utils/userAPI'
import useFormList from '../utils/useFormList'

function LoginBox() {

    const [loginForm, setLoginForm] = useState(true);
    const [loginRegister, handleLoginSubmit, loginErrors] = useFormList();
    const [registerRegister, handleRegisterSubmit, registerErrors] = useFormList();
    const dispatch = useDispatch();

    let loginButtonBackground;
    let registerButtonBackground;

    const loginFormComponent = 
        <LoginForm 
            register={loginRegister}
            errors={loginErrors} 
        />
    const registerFormComponent =
        <RegisterForm
            register={registerRegister}
            errors={registerErrors}
        />
    
    if (loginForm) {
        loginButtonBackground = " dark-background";
        registerButtonBackground = " dark-background-secondary";
    } else {
        loginButtonBackground = " dark-background-secondary";
        registerButtonBackground = " dark-background";
    }

    const handleSubmit = async (data) => {
        console.log("SUBMITTING!");
        console.log(data);
        if (loginForm) {
            const response = await loginUser({
                email: data['Email'],
                password: data['Password']
            });
            if (response.success) {
                dispatch(switchLogin());
            } else {
                console.log('LOGIN: FAIL');
                console.log(response.data);
            }
        } else {
            const response = await registerUser({
                name: data['First Name'],
                lastName: data['Last Name'],
                email: data['Email'],
                password: data['Password']
            });
            if (response.success) {
                dispatch(switchLogin());
            } else {
                console.log('REGISTER: FAIL');
                console.log(response.data);
            }
        }
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
                {loginForm ? loginFormComponent : registerFormComponent}
            </div>
            <div className={styles.submitButtonContainer}>
                <button className={
                    styles.submitButton
                    + " light-text-color"
                    + " dark-background-hover"
                    }
                    onClick={
                        loginForm ? handleLoginSubmit(handleSubmit): handleRegisterSubmit(handleSubmit)
                    }
                >
                    SUBMIT
                </button>
            </div>
        </div>
    );
}

export default LoginBox;