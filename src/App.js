import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserLIst';


function App() {

  const [userListData, setUserListData] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserListData((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString() }];
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList userData={userListData} />
    </div>

  );
}

export default App;
