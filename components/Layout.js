import styles from './Layout.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

import navButtons from '../config/navButtons';

function Layout(props) {

    return (
        <div className={
            styles.layout
            + " light-background"
            }>
            <Navbar navButtons={navButtons}/>
            <div className={styles.content}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;