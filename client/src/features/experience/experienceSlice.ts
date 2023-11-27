import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const user = JSON.parse(localStorage.getItem('user')!)
// Added exclamation point / bang (!) directly after the parameter to JSON.parse(). 
// It tells the TypeScript compiler not to worry because the parameter will never be null which removes the TypeScript error.

const initialState = {
    experience: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
} 

export const experienceSlice = createSlice({
    name: 'experience',
    initialState,
    reducers: {
        reset: (state) => initialState
    }
})

export const { reset } = experienceSlice.actions
export default experienceSlice.reducer