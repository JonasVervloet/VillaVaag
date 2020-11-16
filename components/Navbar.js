import Link from 'next/link';
import styles from './Navbar.module.css';
import NavButton from './NavButton';

function Navbar(props) {

    return (
        <div className={
            styles.navbar
            + " light-text-color" 
            + " primary-font-family"
            + " dark-background"
        }>
            <div className={styles.logo}>
                <Link href='home'>
                    <h3 className={styles.logoText}>Villa Vaag WBW</h3>
                </Link>
            </div>
            <div className={styles.buttons}>
                {props.navButtons.map(button => (
                    <NavButton
                        key={button.label}
                        path={button.path}
                        label={button.label}
                        icon={button.icon} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Navbar
