import axiosClient from "./axiosClient";

const postApi = {
    uploadStatus: async(params) => {
        const url = '/api/test/poststatus';
        const response = axiosClient.post(url, params);
        if (response.status) {
            return response.status;
        } else {
            throw response;
        }
    }
}

export default postApi;