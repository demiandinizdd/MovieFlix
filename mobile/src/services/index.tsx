import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const api = axios.create({
    // The commented line below does not work in Android emulator
    // baseURL: 'http://localhost:8080'
    baseURL: 'http://10.0.2.2:8080'
});

export const TOKEN = "Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMw==";

export async function userToken() {
    const token = await AsyncStorage.getItem("@token");
    
    return token;
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

export async function getMovie(id: number) {
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