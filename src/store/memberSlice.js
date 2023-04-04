import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "Hello Member",
    member: [],
    loading: false,
}

export const memberSlice = createSlice({
    name: "memberStore",
    initialState,
    reducers: {

    }
})

export default memberSlice.reducer;