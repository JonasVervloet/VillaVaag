import React from 'react'
import FormInput from './FormInput'
import styles from './LoginForm.module.css'

function LoginForm({register, errors}) {

    return (
        <form className={styles.loginForm}>
            <FormInput 
                title='Email' 
                type='email'
                register={register({
                    required: 'This field is required.',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email address should be a valid one.'
                    }
                })}
                errors={errors}
            />
            <FormInput 
                title='Password' 
                type='password'
                register={register({
                    required: 'This field is required.',
                    minLength: {
                        value: 6,
                        message: 'Password should be 6 characters long.'
                    }
                })}
                errors={errors}
            />
        </form>
    );
}

export default LoginForm;