import { error, get } from 'jquery';
import React from 'react'
import styles from './FormInput.module.css'

function FormInput({title, type, register, errors, errorMessages}) {

    const getErrorMessage = (errors, errorMessages) => {
        for (const item of errorMessages) {
            if (errors[title] && errors[title].type == item.type) {
                console.log(item.message);
                return item.message;
            }
        }
        return null;
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
                    {getErrorMessage(errors, errorMessages)}
                </p>
            </label>
    );
}

export default FormInput;