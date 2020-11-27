import { error, get } from 'jquery';
import React from 'react'
import styles from './FormInput.module.css'

function FormInput({title, type, register, errors}) {

    const getErrorMessage = errors => {
        if (errors[title]) {
            return errors[title].message;
        } else {
            return null;
        }
    }

    return (
            <label className={styles.inputContainer}>
                <span className={
                    styles.inputLabel
                    + " dark-text-color"
                }>
                    {title}
                </span>
                <input 
                    type={type}
                    name={title}
                    className={
                        styles.inputSpace
                        + " dark-text-color"
                        + " dark-border-color"
                    }
                    ref={register}
                >
                </input>
                <p
                    className={
                        styles.errorField
                        + " dark-text-color"
                    }
                >
                    {getErrorMessage(errors)}
                </p>
            </label>
    );
}

export default FormInput;