// Example function to handle user login
export const loginUser = async (credentials) => {
  try {
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Invalid credentials');
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Example function to handle user registration
export const registerUser = async (userData) => {
  try {
    const response = await fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// Example function to handle user logout
export const logoutUser = async () => {
  try {
    // Perform any necessary cleanup or server-side logout logic
    // For example, invalidate the user session on the server

    // Then, clear local user data
    localStorage.removeItem('user');
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};

// Add more functions as needed for authentication-related tasks

