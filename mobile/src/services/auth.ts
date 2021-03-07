import { api, TOKEN } from "./index";
import queryString from "query-string";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

interface AuthProps {
    username: string;
    password: string;
};

const ReviewAllowedByRole = ['ROLE_MEMBER'];

async function setAsyncKeys(key: string, value: string) {
    try{
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log(e);
    }
};

export async function isReviewAllowedByRole() {
    try {
        const allowed = await AsyncStorage.getItem("@isReviewAllowed");
        
        return allowed == "true" ? true : false;
    } catch (e) {
        console.log(e);
        
        return false;
    }
};

export async function isAuthenticated() {
    try {
        const token = await AsyncStorage.getItem("@token");
        
        return token ? true : false;
    } catch (e) {
        console.log(e);
        
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
    const tokenDecoded = jwtDecode(access_token ? access_token : "");
    const isReviewAllowed =
    (ReviewAllowedByRole.filter(
        role => String(tokenDecoded.authorities)
        .includes(role)).length > 0 ?
        true : false
    );
    setAsyncKeys("@token", access_token);
    setAsyncKeys("@userId", result.data.userUserId.toString());
    setAsyncKeys("@isReviewAllowed", isReviewAllowed.toString());

    return result;
};

export async function doLogout() {
    try {
        AsyncStorage.removeItem("@token");
    } catch (e) {
        console.log(e);
    }
};