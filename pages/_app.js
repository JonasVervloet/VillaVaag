import 'bootstrap/dist/css/bootstrap.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux'

import '../styles/globals.css';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
