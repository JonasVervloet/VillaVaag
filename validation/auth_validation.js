import Joi from 'joi';

const registerValidation = Joi.object({
    name: Joi.string()
    .min(3)
    .required(),
    lastName: Joi.string()
    .min(3)
    .required(),
    email: Joi.string()
    .email()
    .required(),
    password: Joi.string()
    .min(6)
    .required()
});


const loginValidation = Joi.object({
    email: Joi.string()
    .email()
    .required(),
    password: Joi.string()
    .min(6)
    .required()
})

export {
    registerValidation,
    loginValidation
}