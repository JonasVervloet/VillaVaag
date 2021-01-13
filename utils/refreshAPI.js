import {api} from './api';

export const refreshAccessToken = async () => {
    try {
        const refreshResponse = await api.post('refresh');
        return {
            success: true,
            data: refreshResponse.headers['auth-token']
        }
    } catch (e) {
        return {
            success: false,
            data: e
        }
    }
}