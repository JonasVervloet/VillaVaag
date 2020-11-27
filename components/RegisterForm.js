import React from 'react'
import FormInput from './FormInput'
import styles from './RegisterForm.module.css'

function RegisterForm({register, errors}) {

    return (
        <form className={styles.registerForm}>
            <FormInput 
                title='First Name' 
                type='text'
                register={register({
                    required: 'This field is required.',
                    minLength: {
                        value: 2,
                        message: 'First name should be at least 2 characters long.'
                    },
                    maxLength: {
                        value: 255,
                        message: 'First name should be at most 255 charachter long.'
                    }
                })}
                errors={errors}
            />
            <FormInput 
                title='Last Name' 
                type='text'
                register={register({
                    required: 'This field is required.',
                    minLength: {
                        value: 2,
                        message: 'Last name should be at least 2 characters long.'
                    },
                    maxLength: {
                        value: 255,
                        message: 'Last name should be at most 255 charachter long.'
                    }
                })}
                errors={errors}
            />
            <FormInput 
                title='Email' 
                type='email'
                register={register({
                    required: 'This field is required.',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email should be a valid email address.'
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
                        message: 'Password should be at least 6 characters long.'
                    },
                    maxLength: {
                        value: 1024,
                        message: 'Last Name should be at most 1024 charachter long.'
                    }
                })}
                errors={errors}
            />
        </form>
    );
}

export default RegisterForm;