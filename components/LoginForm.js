import React from 'react'
import FormInput from './FormInput'
import styles from './LoginForm.module.css'

function LoginForm() {

    return (
        <form className={styles.loginForm}>
            <FormInput title='Email' type='email'/>
            <FormInput title='Password' type='password'/>
        </form>
    );
}

export default LoginForm;