import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "entities/User";

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

            return response.data;
        } catch (error) {
            console.log(error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);
