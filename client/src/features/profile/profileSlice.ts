import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import profileService from './profileService'

const profile = JSON.parse(localStorage.getItem('profile')!)
// Added exclamation point / bang (!) directly after the parameter to JSON.parse(). 
// It tells the TypeScript compiler not to worry because the parameter will never be null which removes the TypeScript error.

type Profile = {
    _id?: string,
    company: string,
    position: string,
    responsibilities?: string,
    startYear: string
    endYear?: string
}

interface InitialState {
    profile: Profile[]
    isError: boolean
    isSuccess: boolean
    isLoading: boolean
    message: string
}

const initialState: InitialState = {
    profile: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
} 

// create new profile
export const createProfile = createAsyncThunk('profile/create', 
  async (profile: Profile, thunkAPI : any) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await profileService.createProfile(profile, token)
    } catch(err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// get user profile
export const getProfile = createAsyncThunk('profile/getAll', 
  async (_, thunkAPI : any) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await profileService.getProfile(token)
    } catch(err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        return thunkAPI.rejectWithValue(message)
    }
}) 

// Delete user profile
export const deleteProfile = createAsyncThunk(
    'goals/delete',
    async (id, thunkAPI: any) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await profileService.deleteProfile(id, token)
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
  
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createProfile.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createProfile.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.profile = state.profile.concat(action.payload)
            })
            .addCase(createProfile.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })
            .addCase(getProfile.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.profile = action.payload
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })
            .addCase(deleteProfile.pending, (state) => {
                state.isLoading = true
              })
              .addCase(deleteProfile.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.profile = state.profile.filter(
                  (item) => item._id !== action.payload.id
                )
              })
              .addCase(deleteProfile.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
              })
    }
})

export const { reset } = profileSlice.actions
export default profileSlice.reducer