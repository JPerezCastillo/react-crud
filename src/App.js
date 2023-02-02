import React, { useState} from 'react';
import UserTable from './Components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './Components/AddUserForm';
import EditUserForm from './Components/EditUserForm';

function App() {
  //add user
  const usersData = [
		{ id: uuidv4(), name: 'Anna', lastname: 'Maier' },
		{ id: uuidv4(), name: 'Joseph', lastname: 'Müller' },
		{ id: uuidv4(), name: 'Karl', lastname: 'Leitner'}
	];

  const [users, setUsers]= useState(usersData);

  const addUser = (user) => {
    user.id = uuidv4();
    // console.log(user);
    setUsers([
      ...users, 
      user])
  }
   // delete user
   const deleteUser = (id)=> {
    console.log(id);
    setUsers(users.filter(user=>user.id !== id));
  }
  // damit ein formular zeigen oder der andere
  const [editing, setEditing] = useState(false);

  //id / setId Usario Editado
  const [currentUser,setCurrentUser] = useState({
    id: null, name:'',lastname:''
  });
  
  //edit user   
  const editRow = (user) => {
    setEditing (true);
    setCurrentUser ({id: user.id, name: user.name, lastname: user.lastname})
  }

  //update user  
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
        {  
         editing ? (
          <div>
            <h2>Edit user</h2>
          <EditUserForm 
          currentUser={currentUser}
          updateUser = {updateUser}
          ></EditUserForm>
          </div>
        ) : (
          <div>
            <h2>Add user</h2>
            <AddUserForm addUser={addUser} />
          </div>
        )}
      </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
          users={users}
          deleteUser={deleteUser} 
          editRow= {editRow}/>
        </div>
      </div>
    </div>
  );
}
export default App;
