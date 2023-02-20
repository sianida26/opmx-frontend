import { createSlice } from '@reduxjs/toolkit';

export interface DataInterface {
    task11Expiry: Date | null,
}

const initialState: DataInterface = {
    task11Expiry: null,
}

export const configSlice = createSlice({
    name: "config",
    initialState,
    reducers: {

        startTask11: (state) => {
            const date = new Date(new Date().getTime() + 10 * 60000) //10 minutes
            return {
                ...state,
                task11Expiry: date
            }
        },
    }
})

export const { startTask11 } = configSlice.actions;

export default configSlice.reducer;