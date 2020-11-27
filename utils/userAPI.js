import api from './api'

const registerUser = async (registerInfo) => {
    try {
        const registerRes = await api.post(
            'users/register',
            registerInfo
        );
        return {
            success: true,
            data: registerRes
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
        const loginRes = await api.post(
            'users/login',
            loginInfo
        );
        return {
            success: true,
            data: loginRes
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