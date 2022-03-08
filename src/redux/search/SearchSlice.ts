import {IState} from "./types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {search} from "../../api/search";


const initialState:IState = {
    data: null,
    isLoad: false,
    error: {}
};

export const fetchSearch = createAsyncThunk(
    "search/searchItem",
    (url: string) => {
        return search(url);
    }
);

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSearch.pending.type]: (state: IState) => {
            state.isLoad = true;
        },
        [fetchSearch.fulfilled.type]: (state: IState, action) => {
            state.isLoad = false;
            state.error = {};
            state.data = action.payload;
        },
        [fetchSearch.rejected.type]: (state: IState, action) => {
            state.isLoad = false;
            state.error = action.error;
        },
    },
});
export default searchSlice.reducer;