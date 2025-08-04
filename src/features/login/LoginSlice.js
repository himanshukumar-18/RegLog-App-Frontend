import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../index.js";

export const loginUser = createAsyncThunk(
    "/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {

            const response = await axios.post('/login', { email, password });

            //store the token in localStorage
            localStorage.setItem("token", response.data.token)

            return response.data

        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)


const initialState = {
    user: null,
    error: null,
    loading: false,
    token: localStorage.getItem("token") || null
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
        },
        setUserFromToken: (state, action) => {
            state.user = action.payload;
            state.token = localStorage.getItem("token")
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Login failed";
            });
    }
})

export const { logout, setUserFromToken } = loginSlice.actions;
export default loginSlice.reducer;