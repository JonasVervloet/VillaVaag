import {api} from './api'

const registerUser = async (registerInfo) => {
    try {
        const registerResponse = await api.post(
            'users/register',
            registerInfo
        );
        return {
            success: true,
            data: registerResponse.headers['auth-token']
        };
    } catch (e) {
        return {
            success: false,
            data: e
        };
    }
}

const loginUser = async (loginInfo) => {
    try {
        const loginResponse = await api.post(
            'users/login',
            loginInfo
        );
        return {
            success: true,
            data: loginResponse.headers['auth-token']
        }
    } catch (e) {
        return {
            success: false,
            data: e
        };
    }
}

export {
    registerUser,
    loginUser
}