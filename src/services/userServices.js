import axios from "axios";

const baseURL = "https://backend-memorygame.onrender.com";

export function createUser(nameData, emailData, preferencesData) {
    const body = {
        name: nameData,
        email: emailData,
        preferences: preferencesData,
    };

    const response = axios.post(`${baseURL}/user/findAll`, body);

    return response;
};

export function findAll() {
    const response = axios.get(`${baseURL}/user/findAll`);
    return response;
};

export function findOne(email){
    const response = axios.get(`${baseURL}/user/${email}`);
    return response;
};