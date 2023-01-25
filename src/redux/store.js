import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunkMiddleware from "redux-thunk";
import userReducer from "./reducers/user";
import { configureStore } from '@reduxjs/toolkit';


const middleware = [];

const store = configureStore({
        reducer: {
            users: userReducer,
        },
    },
    composeWithDevTools(applyMiddleware(thunkMiddleware, ...middleware)),
);

export default store;