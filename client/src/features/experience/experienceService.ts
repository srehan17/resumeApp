import axios from 'axios'

const API_URL = '/api/experience/'

// Create new experience
const createExperience = async (experienceData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, experienceData, config)

    return response.data
}

// Get user experience data
const getExperience = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Delete experience
const deleteExperience = async (experienceId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.delete(API_URL + experienceId, config)
  
    return response.data
  }
  

const experienceService = {
    createExperience,
    getExperience,
    deleteExperience
}

export default {
    experienceService,
    createExperience,
    getExperience,
    deleteExperience
}