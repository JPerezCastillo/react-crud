import React ,{useEffect}from "react";
import {useForm } from 'react-hook-form'; 

const EditUserForm = (props) => {

  // console.log(props.currentUser);

  const{register,handleSubmit, setValue ,formState:{errors}} = useForm({
    defaultValues:props.currentUser
  });

  useEffect(()=>{
    setValue('name', props.currentUser.name);
    setValue('lastname', props.currentUser.lastname)
  })
  
  const onSubmit = (data,e) => {
    console.log(data);
    data.id = props.currentUser.id
    //komunication zwischen components
    props.updateUser(props.currentUser.id, data);
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
        <button> Edit User </button>
    </form>
  );
}
export default EditUserForm;