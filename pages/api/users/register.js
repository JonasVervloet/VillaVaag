import bcrypt from 'bcrypt'

import {registerValidation} from '../../../server_utils/validation/auth_validation'
import User from '../../../models/User';

async function handle_post_request(req, res) {
    const {error} = registerValidation.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    
    const user = await User.findOne({
        email: req.body.email
    });
    if (user) {
        return res.status(400).send('Email already exists!');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword
    })

    try {
        const savedUser = await newUser.save();
        return res.send({
            user_id: savedUser._id
        })
    } catch (error) {
        return res.status(400).send(error);
    }
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