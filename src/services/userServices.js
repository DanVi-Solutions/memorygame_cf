import axios from "axios";

const baseURL = "http://localhost:3000";

export function createUser(data1, data2) {
    const body = {
        name: data1,
        email: data2,
        preferences: "kkk",
    };

    const response = axios.post(`${baseURL}/user/createUser`, body);

    return response;
}