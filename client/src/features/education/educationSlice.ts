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
    isErrorEducation: boolean
    isSuccess: boolean
    isLoadingEducation: boolean
    messageEducation: string
}

const initialState: InitialState = {
    education: [],
    isErrorEducation: false,
    isSuccess: false,
    isLoadingEducation: false,
    messageEducation: ''
} 

// create new education
export const createEducation = createAsyncThunk('education/create', 
  async (education: Education, thunkAPI : any) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await educationService.createEducation(education, token)
    } catch(err) {
        const messageEducation = (err.response && err.response.data && err.response.data.messageEducation) || err.messageEducation || err.toString()
        return thunkAPI.rejectWithValue(messageEducation)
    }
})

// get user education
export const getEducation = createAsyncThunk('education/getAll', 
  async (_, thunkAPI : any) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await educationService.getEducation(token)
    } catch(err) {
        const messageEducation = (err.response && err.response.data && err.response.data.messageEducation) || err.messageEducation || err.toString()
        return thunkAPI.rejectWithValue(messageEducation)
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
        const messageEducation =
          (error.response &&
            error.response.data &&
            error.response.data.messageEducation) ||
          error.messageEducation ||
          error.toString()
        return thunkAPI.rejectWithValue(messageEducation)
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
                state.isLoadingEducation = true
            })
            .addCase(createEducation.fulfilled, (state, action) => {
                state.isLoadingEducation = false
                state.isSuccess = true
                state.education = state.education.concat(action.payload)
            })
            .addCase(createEducation.rejected, (state, action) => {
                state.isLoadingEducation = false
                state.isErrorEducation = true
                state.messageEducation = action.payload as string
            })
            .addCase(getEducation.pending, (state) => {
                state.isLoadingEducation = true
            })
            .addCase(getEducation.fulfilled, (state, action) => {
                state.isLoadingEducation = false
                state.isSuccess = true
                state.education = action.payload
            })
            .addCase(getEducation.rejected, (state, action) => {
                state.isLoadingEducation = false
                state.isErrorEducation = true
                state.messageEducation = action.payload as string
            })
            .addCase(deleteEducation.pending, (state) => {
                state.isLoadingEducation = true
              })
              .addCase(deleteEducation.fulfilled, (state, action) => {
                state.isLoadingEducation = false
                state.isSuccess = true
                state.education = state.education.filter(
                  (item) => item._id !== action.payload.id
                )
              })
              .addCase(deleteEducation.rejected, (state, action) => {
                state.isLoadingEducation = false
                state.isErrorEducation = true
                state.messageEducation = action.payload as string
              })
    }
})

export const { reset } = educationSlice.actions
export default educationSlice.reducer