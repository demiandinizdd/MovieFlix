import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import {decode, encode} from 'base-64';

if (!global.btoa) {
    global.btoa = encode;
}

if (!global.atob) {
    global.atob = decode;
}

export type Role = 'ROLE_VISITOR' | 'ROLE_MEMBER';

export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'movieflix';
export const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'movieflix123';
// The commented line below does not work in Android emulator
// export const LOCAL_URL = http://localhost:8080'
// Please, use 10.0.2.2:8080 to Localhost instead of localhost:8080
export const LOCAL_URL = 'http://10.0.2.2:8080';

export const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL ?? LOCAL_URL
});

export const TOKEN = window.btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

export async function userToken() {
    const token = await AsyncStorage.getItem("@token");
    
    return token;
};

export async function userId() {
    const userId = await AsyncStorage.getItem("@userId");
    
    return parseInt(userId);
};

export function isAllowedByRole(userId: number) {
    // TODO TAKE USER ROLES FROM BACKEND
    // const authToken = userToken();
    // const res = api.get(`/movies?direction=ASC&orderBy=title`, {
    //     headers: {
    //         Authorization: `Bearer ${authToken}`,
    //     }
    // });
 
    // return res.some(role => res.includes("ROLE_MEMBER"));
    return true;
};

export async function getMovies() {
    const authToken = await userToken();
    const res = api.get(`/movies?direction=ASC&orderBy=title`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
    
    return res;
};

export async function getMovieById(id: number) {
    const authToken = await userToken();
    const res = api.get(`/movies/${id}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
    
    return res;
};

export async function getGenres() {
    const authToken = await userToken();
    const res = api.get(`/genres?direction=ASC&orderBy=name`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
    
    return res;
};

export async function createReview(data: object) {
    const authToken = await userToken();
    const res = api.post(`/reviews`, data, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
    
    return res;
};