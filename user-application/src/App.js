import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import UserStatus from './components/UserStatus';
import { useState } from 'react';
// import { UserReducer } from './components/UserReducer';
import { useReducer } from 'react';
import { User, UserReducer } from './components/UserReducer';

function App() {
  const [user, dispatcher] = useReducer(UserReducer, User)
  return (
    <div className="App">
      <div>
        <h1>User App</h1>
      <h3>id: {user.id}</h3>
      <h3>name: {user.name}</h3>
      <h3>role: {user.role}</h3>
      <h3>status: {user.status}</h3> 
      </div>
      <UserList dispatcher={dispatcher} ></UserList>
      <UserProfile user={user} dispatcher={dispatcher}></UserProfile>
      <UserStatus user={user} dispatcher={dispatcher}></UserStatus>
    </div>
  );
}

export default App;
