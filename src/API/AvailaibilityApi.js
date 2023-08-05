

import axios from 'axios';

const API_BASE_URL = 'http://your-backend-server-url/api'; // Replace with your actual backend API base URL

export const fetchPitchAvailability = async (dateTime) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/availability`, {
      params: { dateTime },
    });
    return response.data;
  } catch (error) {
    // Handle error or throw an error to be handled by the calling function
    throw new Error('Error fetching pitch availability.');
  }
};

export const bookPitch = async (bookingData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/book`, bookingData);
    return response.data;
  } catch (error) {
    // Handle error or throw an error to be handled by the calling function
    throw new Error('Error booking pitch.');
  }
};
