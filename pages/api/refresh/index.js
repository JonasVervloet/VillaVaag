import { TokenExpiredError } from "jsonwebtoken";
import User from "../../../models/User";
import { createAccessToken, verifyRefreshToken } from "../../../server_utils/autentication/tokens";

const handle_post_request = async (req, res) => {

    const refreshToken = req.cookies['vv-token'];
    if (! refreshToken) {
        return res.status(401).send('Please authenticate in order to refresh your token!');
    }

    const [success, payload] = verifyRefreshToken(refreshToken);

    if (! success) {
        return res.status(401).send('Invalid authentication!');
    }

    const user = await User.findOne({
        _id: payload.userId
    });
    if (! user) {
        return res.status(400).send('Could not find user...');
    }

    if (user.tokenCount != payload.tokenCount) {
        return res.status(401).send('Invalid authentication!');
    }

    const accessToken = createAccessToken(user);
    res.setHeader('auth-token', accessToken);

    return res.json({
        success: true,
        access_token: accessToken
    });
}

export default async (req, res) => {
    const method = req.method;
    switch (method) {
        case 'POST':
            return handle_post_request(req, res);
        default:
            return res.status(405).send('Method not allowed!');
    }
}