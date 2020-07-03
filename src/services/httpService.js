import Axios from "./networkService";
export const HttpService = {
    login: function (payload) {
        return Axios.post(`user/login`, payload);
    },
    getAllUsers: function () {
        return Axios.get(`users`);
    }
}