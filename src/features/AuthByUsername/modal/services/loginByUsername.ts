import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import i18n from "shared/config/i18n/i18n";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
User, LoginByUsernameProps, {rejectValue: string }>(
    "login/loginByUsername",
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:8000/login", {
                username,
                password,
            });

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (error) {
            console.log(error.message);
            return thunkAPI
                .rejectWithValue(i18n.t("you entered an incorrect login or password"));
        }
    },
);
