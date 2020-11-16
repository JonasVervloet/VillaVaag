import Link from 'next/link';
import styles from './NavButton.module.css';

function NavButton(props) {

    return (
        <Link href={props.path}>
            <div className={styles.navbutton}>
                <span className={styles.label}>{props.label}</span>
            </div>
        </Link>
    )
};

export default NavButton;