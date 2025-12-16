import usersData from '../data/users.json';

export const authenticateUser = (email: string, password: string) => {
  const user = usersData.users.find(
    user => user.email === email && user.password === password
  );
  
  if (user) {
    // Remove password from returned user object
    const { password: _, ...userWithoutPassword } = user;
    return { success: true, user: userWithoutPassword };
  }
  
  return { success: false, error: 'Invalid credentials' };
};

export const logout = () => {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('auth_token');
};