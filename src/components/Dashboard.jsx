import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';
import { useAuthStore } from '../store/authStore'; 
import './Dashboard.css'; 

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const { username, logout } = useAuthStore(); 

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUsers();
        console.log('Data from getUsers():', data);
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error('Error: getUsers() did not return an array of users');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    fetchData();
  }, []);

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  return (
    <div>
      <h1 className="greetings">
        Welcome, {username} <button className="logout-button" onClick={handleLogout}>Logout</button></h1>
      <div className="container">
        <div className="column">
          <h3>Name</h3>
          {users.map((user) => (
            <p key={user.contactId}>{user.name}</p>
          ))}
        </div>
        <div className="column">
          <h3>Surnames</h3>
          {users.map((user) => (
            <p key={user.contactId}>{user.surnames}</p>
          ))}
        </div>
        <div className="column">
          <h3>Birth Date</h3>
          {users.map((user) => (
            <p key={user.contactId}>{user.birthDate}</p>
          ))}
        </div>
        <div className="column">
          <h3>Gender</h3>
          {users.map((user) => (
            <p key={user.contactId}>{user.gender}</p>
          ))}
        </div>
        <div className="column">
          <h3>Profession</h3>
          {users.map((user) => (
            <p key={user.contactId}>{user.profesion}</p>
          ))}
        </div>
        <div className="column">
          <h3>Email</h3>
          {users.map((user) => (
            <p key={user.contactId}>{user.email}</p>
          ))}
        </div>
        <div className="column">
          <h3>Phone</h3>
          {users.map((user) => (
            <p key={user.contactId}>{user.phone}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;