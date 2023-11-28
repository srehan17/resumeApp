import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import educationService from './educationService'

const education = JSON.parse(localStorage.getItem('education')!)
// Added exclamation point / bang (!) directly after the parameter to JSON.parse(). 
// It tells the TypeScript compiler not to worry because the parameter will never be null which removes the TypeScript error.

type Education = {
    _id?: string,
    institution: string,
    qualification: string,
    gpa?: string,
    startYear: string
    endYear?: string
}

interface InitialState {
    education: Education[]
    isError: boolean
    isSuccess: boolean
    isLoading: boolean
    message: string
}

const initialState: InitialState = {
    education: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
} 

// create new education
export const createEducation = createAsyncThunk('education/create', 
  async (education: Education, thunkAPI : any) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await educationService.createEducation(education, token)
    } catch(err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// get user education
export const getEducation = createAsyncThunk('education/getAll', 
  async (_, thunkAPI : any) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await educationService.getEducation(token)
    } catch(err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        return thunkAPI.rejectWithValue(message)
    }
}) 

// Delete user education
export const deleteEducation = createAsyncThunk(
    'goals/delete',
    async (id, thunkAPI: any) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await educationService.deleteEducation(id, token)
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
  
export const educationSlice = createSlice({
    name: 'education',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createEducation.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createEducation.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.education = state.education.concat(action.payload)
            })
            .addCase(createEducation.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })
            .addCase(getEducation.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getEducation.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.education = action.payload
            })
            .addCase(getEducation.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })
            .addCase(deleteEducation.pending, (state) => {
                state.isLoading = true
              })
              .addCase(deleteEducation.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.education = state.education.filter(
                  (item) => item._id !== action.payload.id
                )
              })
              .addCase(deleteEducation.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
              })
    }
})

export const { reset } = educationSlice.actions
export default educationSlice.reducer