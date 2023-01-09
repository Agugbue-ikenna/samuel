import React, { useState, Fragment } from 'react';

import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';


function App() {
  const [UsersList, SetUsersList] = useState([]);
  //the function for the onAddUser which we will add two arguement
  const AddUserHandler = (usersName, usersAge) => {
    SetUsersList((previousList) => {
      //so the two argument in the AddUserHandler is what we add in the return parameter
      return [...previousList, { name: usersName, age: usersAge }];
    })
  };

  return (
    //instead of wrapping all the elements in a div tag we can simply use an empty tag like this <></>
    //or we could use React.fragment like this <React.fragment></React.fragments> or we could add fragments to the curly braces
    //which contains the useState then use it as a wrapper
    <Fragment>
      <AddUser onAddUser={AddUserHandler} />
      <UserList users={UsersList} />
    </Fragment>
  );
}

export default App;
