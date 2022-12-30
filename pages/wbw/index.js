import Link from 'next/link';

import styles from '../../styles/WBWHome.module.css'

export default function WBWHome() {
    return (
        <div className={
            styles.landingPageContainer
            + " white-background"
        }>
            <h1 className={
                styles.titleText
                + " dark-text-color"
            }>
                Villa Vaag
            </h1>
            <h1 className={
                styles.titleText
                + " dark-text-color"
            }>
                WBW
            </h1>
            <Link href="wbw/groups" className={
                    styles.loginText
                    + " dark-text-color"
                    + " dark-text-hover"}>
                    click here to login-in
            </Link>
        </div>
    )
} 