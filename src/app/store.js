import {ConfigureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store=ConfigureStore({
    reducer:{
        counter:counterReducer
    }
});