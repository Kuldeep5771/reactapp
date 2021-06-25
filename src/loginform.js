import React , { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function LoginForm (props) {

    const schema = yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required(),
      });

    const { register, handleSubmit, formState:{ errors }  } = useForm({resolver: yupResolver(schema)}); //import the useForm default functions

     const actionUser = (data) => {  //user defined parameter 'data'
         
        //alert(JSON.stringify(data));
        if (data.username == "deepu" && data.password == "deepu") {
            alert('Login Successful');
        } else {
            alert('Login Failed , Try again');
        }
     }
   

   //// const handlerSubmit = (data) => { // const handleSubmit = function handleSubmit(evt) {}
//console.log(data);
 //     alert({data});
 //   }
    
    
    return (



        <div>
           <form onSubmit={handleSubmit(actionUser)}>
            <span>
                UserName : 
            </span>
            <input type="text" name="username" {...register("username")} placeholder="user name" />
            <p>{errors.username?.message}</p>
            <br></br>
            <span> 
                Password :
            </span>
            <input type="password" name="password" {...register("password")}/>
            <p>{errors.password?.message}</p>
            <br></br>
            <input type="submit" value ="Login" />
            </form>
        
        </div>
    );

    
}
export default LoginForm;