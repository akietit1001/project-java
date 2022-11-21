import axiosClient from "./axiosClient";

const userApi = {
    signIn: (payload) => {
        // Cái đường dẫn API này tuỳ thuộc vào BE của bạn cho cái nào thì dùng cái đó
        const url = '/api/v1/pharmacy/login';
        return axiosClient.post(url, payload);
    },

    getList: () => {
        const url = '/api/v1/pharmacy/orders?start_date=1656835020000&end_date=1659513420000';
        return axiosClient.get(url);
    }
}

export default userApi;