const loginUrl = 'https://www.mockachino.com/06c67c77-18c4-45/login';

export const login = async (username, password) => {
  try {
    const response = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to login');
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
