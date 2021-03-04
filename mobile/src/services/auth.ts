import { api, saveSessionData, TOKEN } from "./index";
import queryString, { parse } from "query-string";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthProps {
    username: string;
    password: string;
};

async function setAsyncKeys(key: string, value: string) {
    try{
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.warn(e);
    }
};

export async function isAuthenticated() {
    try {
        const token = await AsyncStorage.getItem("@token");
        
        return token ? true : false;
    } catch (e) {
        console.warn(e);
        
        return false;
    }
};

export async function doLogin(userInfo: AuthProps) {
    const data = queryString.stringify({ ...userInfo, grant_type: "password" });
    const result = await api.post('/oauth/token', data, {
        headers: {
            Authorization: `Basic ${TOKEN}`,
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
    const { access_token } = result.data;
    setAsyncKeys("@token", access_token);
    setAsyncKeys("@userId", result.data.userUserId.toString());
    
    return result;
};

export async function doLogout() {
    try {
        AsyncStorage.removeItem("@token");
    } catch (e) {
        console.warn(e);
    }
};