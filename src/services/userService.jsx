const usersUrl = 'https://www.mockachino.com/06c67c77-18c4-45/users';

export const getUsers = async () => {
  try {
    const response = await fetch(usersUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const data = await response.json();
    return data.users || []; 
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
