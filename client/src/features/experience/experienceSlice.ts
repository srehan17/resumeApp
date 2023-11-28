import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import experienceService from './experienceService'

const experience = JSON.parse(localStorage.getItem('experience')!)
// Added exclamation point / bang (!) directly after the parameter to JSON.parse(). 
// It tells the TypeScript compiler not to worry because the parameter will never be null which removes the TypeScript error.

type Experience = {
    _id?: string,
    company: string,
    position: string,
    responsibilities?: string,
    startYear: string
    endYear?: string
}

interface InitialState {
    experience: Experience[]
    isError: boolean
    isSuccess: boolean
    isLoading: boolean
    message: string
}

const initialState: InitialState = {
    experience: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
} 

// create new experience
export const createExperience = createAsyncThunk('experience/create', 
  async (experience: Experience, thunkAPI : any) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await experienceService.createExperience(experience, token)
    } catch(err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// get user experience
export const getExperience = createAsyncThunk('experience/getAll', 
  async (_, thunkAPI : any) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await experienceService.getExperience(token)
    } catch(err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        return thunkAPI.rejectWithValue(message)
    }
}) 

// Delete user experience
export const deleteExperience = createAsyncThunk(
    'goals/delete',
    async (id, thunkAPI: any) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await experienceService.deleteExperience(id, token)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )
  
export const experienceSlice = createSlice({
    name: 'experience',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createExperience.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createExperience.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.experience = state.experience.concat(action.payload)
            })
            .addCase(createExperience.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })
            .addCase(getExperience.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getExperience.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.experience = action.payload
            })
            .addCase(getExperience.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })
            .addCase(deleteExperience.pending, (state) => {
                state.isLoading = true
              })
              .addCase(deleteExperience.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.experience = state.experience.filter(
                  (item) => item._id !== action.payload.id
                )
              })
              .addCase(deleteExperience.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
              })
    }
})

export const { reset } = experienceSlice.actions
export default experienceSlice.reducer