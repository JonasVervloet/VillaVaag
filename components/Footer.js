import styles from './Footer.module.css'

function Footer() {

    return (
        <div className={
            styles.footer
            + " light-text-color"
            + " primary-font-family" 
            + " light-background-secondary"
        }>
            FOOTER
        </div>
    )
}

export default Footer