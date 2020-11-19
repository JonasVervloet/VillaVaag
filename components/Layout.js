import {useSelector} from 'react-redux'

import styles from './Layout.module.css';
import Navbar from './Navbar';
import Footer from './Footer';
import LoginBox from './LoginBox';
import navButtons from '../config/navButtons';

function Layout(props) {

    const isLogged = useSelector(
        state => state.isLogged
    );

    return (
        <div className={
            styles.layout
            + " light-background"
            }>
            <Navbar navButtons={navButtons}/>
            <div className={styles.content}>
                {isLogged ? props.children : <LoginBox/>}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;