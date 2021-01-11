import withAuthentication from '../../../server_utils/autentication/authMiddleware'

const handle_request = (req, res) => {
    res.send('This is the groups route!');
}

export default withAuthentication(handle_request);