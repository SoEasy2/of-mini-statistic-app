import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import searchReducer from "./search/SearchSlice";
import userReducer from './user/UserSlice';
const rootReducer = combineReducers({
    search: searchReducer,
    user: userReducer,
})
const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false,
});
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: customizedMiddleware,
    });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];