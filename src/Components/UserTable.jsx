import React from "react"

const UserTable = (props) => {
  
  console.log(props.users);

  return(
        <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Lastname</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          //If abfrage
            props.users.length > 0 ? (
              //Antwort positiv
            props.users.map(user => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.lastname}</td>
                    <td><button className="button muted button" 
                    onClick={()=>{ props.editRow(user)}}> Edit </button>
                    <button className="button muted button" 
                    onClick={()=>{props.deleteUser(user.id)}}> Delete </button> </td>           
                </tr>
            )) 
            ) : (
              //negativ antwort
                <tr> <td colSpan={3}> No Users </td> </tr>
            )
        }
      </tbody>
    </table>
  )
}
export default UserTable;