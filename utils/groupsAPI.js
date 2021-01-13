import { apiWithAuthentication } from './api';

export const testGroupsRoute = async (accessToken) => {
    try {
        const grouspResponse = await apiWithAuthentication(accessToken).get(
            'groups'
        );
        return {
            success: true,
            data: grouspResponse.data
        }
    } catch (e) {
        return {
            success: false,
            data: e
        }
    }
}