import { HttpService } from "./httpService";

export const AuthService = {
    saveToken: function (token) {
        sessionStorage.setItem("token", token);
    },
    fetchToken: function () {
        return sessionStorage.getItem("token");
    },
    login: async function (payload) {
        try {
            const res = await HttpService.login(payload);
            if (res.data.token) {
                this.saveToken(res.data.token);
                return true;
            }
            else
                return false;

        }
        catch (error) {
            console.log(error);
        }
    }
}