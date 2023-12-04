const BASE_URL = 'http://localhost:3001'; // Replace with your actual backend URL

// Example function for making a GET request
export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to be caught by the calling function
  }
};

// Example function for making a POST request
export const postData = async (endpoint, body) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

// Add more functions for other types of requests as needed
