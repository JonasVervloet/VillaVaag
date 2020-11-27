import api from './api'

const registerUser = async (registerInfo) => {
    try {
        const registerRes = await api.post(
            '/users/register',
            registerInfo
        );
        return registerRes;
    } catch (e) {
        console.log(e);
        return e;
    }
}

const loginUser = async (loginInfo) => {
    try {
        const loginRes = await api.post(
            'users/login',
            loginInfo
        );
        console.log(loginRes);
        return loginRes;
    } catch (e) {
        console.log(e);
        return e;
    }
}

export {
    registerUser,
    loginUser
}