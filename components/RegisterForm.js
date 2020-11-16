import React from 'react'
import FormInput from './FormInput'
import styles from './RegisterForm.module.css'

function RegisterForm() {

    return (
        <form className={styles.registerForm}>
            <FormInput title='First Name' type='text'/>
            <FormInput title='Last Name' type='text'/>
            <FormInput title='Email' type='email'/>
            <FormInput title='Password' type='password'/>
        </form>
    );
}

export default RegisterForm;