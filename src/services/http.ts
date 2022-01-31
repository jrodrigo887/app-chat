import axios, { AxiosInstance } from "axios";

const InstanceAxios = (url: string): AxiosInstance => {
    const http: AxiosInstance = axios.create({
        baseURL: url,
        headers: {
            "mime-type": "application/json"
        }

    });

    return http;
}

export default InstanceAxios;