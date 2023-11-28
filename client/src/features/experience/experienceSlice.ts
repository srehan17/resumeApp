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
    isErrorExperience: boolean
    isSuccess: boolean
    isLoadingExperience: boolean
    messageExperience: string
}

const initialState: InitialState = {
    experience: [],
    Experience: false,
    isSuccess: false,
    isLoadingExperience: false,
    messageExperience: ''
} 

// create new experience
export const createExperience = createAsyncThunk('experience/create', 
  async (experience: Experience, thunkAPI : any) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await experienceService.createExperience(experience, token)
    } catch(err) {
        const messageExperience = (err.response && err.response.data && err.response.data.messageExperience) || err.messageExperience || err.toString()
        return thunkAPI.rejectWithValue(messageExperience)
    }
})

// get user experience
export const getExperience = createAsyncThunk('experience/getAll', 
  async (_, thunkAPI : any) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await experienceService.getExperience(token)
    } catch(err) {
        const messageExperience = (err.response && err.response.data && err.response.data.messageExperience) || err.messageExperience || err.toString()
        return thunkAPI.rejectWithValue(messageExperience)
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
        const messageExperience =
          (error.response &&
            error.response.data &&
            error.response.data.messageExperience) ||
          error.messageExperience ||
          error.toString()
        return thunkAPI.rejectWithValue(messageExperience)
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
                state.isLoadingExperience = true
            })
            .addCase(createExperience.fulfilled, (state, action) => {
                state.isLoadingExperience = false
                state.isSuccess = true
                state.experience = state.experience.concat(action.payload)
            })
            .addCase(createExperience.rejected, (state, action) => {
                state.isLoadingExperience = false
                state.Experience = true
                state.messageExperience = action.payload as string
            })
            .addCase(getExperience.pending, (state) => {
                state.isLoadingExperience = true
            })
            .addCase(getExperience.fulfilled, (state, action) => {
                state.isLoadingExperience = false
                state.isSuccess = true
                state.experience = action.payload
            })
            .addCase(getExperience.rejected, (state, action) => {
                state.isLoadingExperience = false
                state.Experience = true
                state.messageExperience = action.payload as string
            })
            .addCase(deleteExperience.pending, (state) => {
                state.isLoadingExperience = true
              })
              .addCase(deleteExperience.fulfilled, (state, action) => {
                state.isLoadingExperience = false
                state.isSuccess = true
                state.experience = state.experience.filter(
                  (item) => item._id !== action.payload.id
                )
              })
              .addCase(deleteExperience.rejected, (state, action) => {
                state.isLoadingExperience = false
                state.Experience = true
                state.messageExperience = action.payload as string
              })
    }
})

export const { reset } = experienceSlice.actions
export default experienceSlice.reducer