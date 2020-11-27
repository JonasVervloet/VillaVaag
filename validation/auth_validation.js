import Joi from 'joi';

const registerValidation = Joi.object({
    name: Joi.string()
    .min(2)
    .max(255)
    .required(),
    lastName: Joi.string()
    .min(2)
    .max(255)
    .required(),
    email: Joi.string()
    .email()
    .required(),
    password: Joi.string()
    .min(6)
    .max(1024)
    .required()
});


const loginValidation = Joi.object({
    email: Joi.string()
    .email()
    .required(),
    password: Joi.string()
    .min(6)
    .max(1024)
    .required()
})

export {
    registerValidation,
    loginValidation
}