import bcrypt from 'bcrypt'
import {serialize} from 'cookie'

import {loginValidation} from '../../../server_utils/validation/auth_validation'
import {createAccessToken, createRefreshToken} from '../../../server_utils/autentication/tokens'
import User from '../../../models/User';

async function handle_post_request(req, res) {
    const {error} = loginValidation.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const user = await User.findOne({
        email: req.body.email
    });
    if (!user) {
        return res.status(400).send('Invalid email or password1!');
    }

    const validPassword = await bcrypt.compare(
        req.body.password, user.password
    );
    if (!validPassword) {
        return res.status(400).send('Invalid email or password2!');
    }

    const token = createAccessToken(user);
    console.log(createRefreshToken(user));
    res.setHeader('Set-Cookie', serialize('vv-token', createRefreshToken(user)));
    res.setHeader('aut-token', token);

    return res.send(token);
}

export default async (req, res) => {
    const method = req.method
    switch (method) {
        case 'POST':
            return handle_post_request(req, res);

        default:
            return res.status(405).send('Method not allowed!');
    }
}