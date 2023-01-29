import axiosClient from "./axiosClient";

const userApi = {
    signIn: async(params) => {
        const url = '/api/auth/signin';
        const response = await axiosClient.post(url, params);
        if (response.status === 'ok') {
            return response.data;
        } else {
            throw response;
        }
    },

    signUp: async(params) => {
        const url = '/api/auth/signup';
        const response = await axiosClient.post(url, params);
        if (response.success) {
            return response.data;
        } else {
            throw response;
        }
    }
}
export default userApi;