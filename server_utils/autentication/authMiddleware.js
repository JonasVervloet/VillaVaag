import { verifyAccessToken } from "./tokens";

const withAuthentication = handler => {
    return async (req, res) => {
        
        const authentication = req.headers['auth-token'];

        if (! authentication) {
            return res.status(401).send('Please authenticate to receive the requested response!');
        }
        const [success, payload] = verifyAccessToken(authentication);
        if (!success) {
            return res.status(401).send('Invalid authentication!');
        }
        req.payload = payload;
        return handler(req, res);
    }
}

export default withAuthentication;