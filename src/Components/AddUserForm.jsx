import React from "react";
import {useForm } from 'react-hook-form'; 

const AddUserForm = (props) => {

  const{register,handleSubmit ,formState:{errors}} = useForm();

  const onSubmit = (data,e) => {
    
    // console.log(data);
    props.addUser(data); //komunicacion zwischen components
    e.target.reset();  //label ausleeren
  }
 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          {...register("name", {  //mit hooks register
            required: { value: true},
          })}
          type="text"
        ></input>
      <div>{errors.name?.type === "required" && "text erforderlich"}</div>

        <label>Lastname</label>
        <input
          {...register("lastname", {
            required: { value: true},
          })}
          type="text"
        ></input>
      <div>{errors.lastname?.type === "required" && "text erfordelich"}</div>
        <button type="submit"> Add New User </button>
    </form>
  );
}
export default AddUserForm;