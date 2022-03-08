import {IState} from "./types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {search} from "../../api/search";
import {IAuth} from "../../models/auth";
import {getUserById, login, logout, register} from "../../api/auth";
import {addModel} from "../../api/model";
import {IAddModelDto} from "../../models/model/add-model-dto";


const initialState:IState = {
    data: null,
    isLoad: false,
    error: {}
};

export const fetchLogin = createAsyncThunk(
    "user/login",
    (dto: IAuth) => {
        return login(dto);
    }
);
export const fetchRegistration = createAsyncThunk(
    "user/registration",
    (dto: IAuth) => {
        return register(dto);
    }
);
export const fetchGetUser = createAsyncThunk(
    "user/getById",
    (id: number) => {
        return getUserById(id);
    }
);
export const fetchAddModel = createAsyncThunk(
    "user/addModel",
    (dto: IAddModelDto) => {
        return addModel(dto);
    }
);
export const fetchLogout = createAsyncThunk(
    "user/logout",
    () => {
        return logout();
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchLogin.pending.type]: (state: IState) => {
            state.isLoad = true;
        },
        [fetchLogin.fulfilled.type]: (state: IState, action) => {
            state.isLoad = false;
            state.error = {};
            state.data = action.payload;
        },
        [fetchLogin.rejected.type]: (state: IState, action) => {
            state.isLoad = false;
            state.error = action.error;
        },
        [fetchRegistration.pending.type]: (state: IState) => {
            state.isLoad = true;
        },
        [fetchRegistration.fulfilled.type]: (state: IState, action) => {
            state.isLoad = false;
            state.error = {};
            state.data = action.payload;
        },
        [fetchRegistration.rejected.type]: (state: IState, action) => {
            state.isLoad = false;
            state.error = action.error;
        },
        [fetchGetUser.pending.type]: (state: IState) => {
            state.isLoad = true;
        },
        [fetchGetUser.fulfilled.type]: (state: IState, action) => {
            state.isLoad = false;
            state.error = {};
            state.data = action.payload;
        },
        [fetchGetUser.rejected.type]: (state: IState, action) => {
            state.isLoad = false;
            state.error = action.error;
        },
        [fetchAddModel.pending.type]: (state: IState) => {
            state.isLoad = true;
        },
        [fetchAddModel.fulfilled.type]: (state: IState, action) => {
            state.isLoad = false;
            state.error = {};
            state.data?.models.unshift(action.payload);
        },
        [fetchAddModel.rejected.type]: (state: IState, action) => {
            state.isLoad = false;
            state.error = action.error;
        },
        [fetchLogout.pending.type]: (state: IState) => {
            state.isLoad = true;
        },
        [fetchLogout.fulfilled.type]: (state: IState, action) => {
            state.isLoad = false;
            state.error = {};
            state.data = null;
        },
        [fetchLogout.rejected.type]: (state: IState, action) => {
            state.isLoad = false;
            state.error = action.error;
        },
    },
});
export default userSlice.reducer;