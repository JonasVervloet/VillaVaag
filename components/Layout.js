import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import styles from './Layout.module.css';
import Navbar from './Navbar';
import Footer from './Footer';
import LoginBox from './LoginBox';
import navButtons from '../config/navButtons';
import { refreshAccessToken } from '../utils/refreshAPI';
import { setAccessToken, switchLogin, loginUser, logoutUser } from '../actions';

function Layout(props) {

    const isLogged = useSelector(
        state => state.isLogged
    );
    const accessToken = useSelector(
        state => state.accessToken
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (! accessToken) {
            console.log("refreshing access token!");
            refresh();   
        }
    }, [accessToken]);

    const refresh = async () => {
        const response = await refreshAccessToken();
        if (response.success) {
            dispatch(loginUser())
            dispatch(setAccessToken(response.data));
        } else {
            dispatch(logoutUser());
        }
    }

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