import React from 'react'
import styles from './FormInput.module.css'

function FormInput(props) {

    return (
            <label className={styles.inputContainer}>
                <span className={
                    styles.inputLabel
                    + " dark-text-color"
                }>
                    {props.title}
                </span>
                <input 
                type={props.type}
                className={
                    styles.inputSpace
                    + " dark-text-color"
                    + " dark-border-color"
                }>
                </input>
            </label>
    );
}

export default FormInput;