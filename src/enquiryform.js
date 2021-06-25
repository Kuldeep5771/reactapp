import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Axios from 'axios';


function Enquiryform() {

    const schema = yup.object().shape({
        firstname: yup.string().required(),
        lastname: yup.string().required(),
        emailaddress: yup.string().required(),
        mobilenumber: yup.number().required(),
        qualification: yup.string().required(),
      });


     function  componentDid() {
          Axios.get("https://api.npms.io/v2/search?q=react").then((response) => {
         /// alert(response);    
          console.log(response)});
      }

      const { register, handleSubmit, formState:{ errors }  } = useForm({resolver: yupResolver(schema)});

    const showsubmit = (form1) => {
           alert(JSON.stringify(form1));
    }

    return (

        <div>

                <div class="modal-header">
                <h4 class="modal-title">Send Us an Enquiry</h4>
                <button class="close" data-dismiss="modal" type="button">×</button></div>
                

            <form onSubmit={handleSubmit(showsubmit)}>
                

                <div>
                    <span>
                        First Name :
                    </span>
                    <input type="text" name="firstname" {...register("firstname")} placeholder="user name" />
                    <p>{errors.firstname?.message}</p>
                </div>

                <br></br>

                <div>
                    <span>
                        Last Name :
                    </span>

                    <input type="text" name="lastname" {...register("lastname")} placeholder="last name" />
                    <p>{errors.lastname?.message}</p>
                </div>

                <br></br>
                <div>
                    <span>
                        Email Addres :
                    </span>
                    <input type="text" name="emailaddress" {...register("emailaddress")} placeholder="email" />
                    <p>{errors.emailaddress?.message}</p>
                </div>

                <br></br>

                <div>
                    <span>
                        Mobile Num :
                    </span>

                    <input type="text" name="mobilenumber" {...register("mobilenumber")} placeholder="Number" />
                    <p>{errors.mobilenumber?.message}</p>
                </div>
                <br></br>


                <div>
                    <span>
                        Qualification :
                    </span>

                    <select  name="qualification" {...register("qualification")} placeholder="Qualification" class="ng-pristine ng-invalid ng-touched">
                        <option  disabled="" selected="" value="">Qualification</option>
                        <option  value="10th">10th</option>
                        <option  value="12th">12th</option>
                        <option  value="diploma">Diploma</option>
                        <option  value="Bachelor">Bachelor's Degree</option>
                        <option  value="PG">Post Graduate</option>
                        <option  value="Master">Master's Degree</option>

                    </select>
                    

                </div>

                <br></br>

                <span>
                    Calender:
                </span>

                <input _ngcontent-c1="" name="date_of_birth"{...register("calender")} placeholder="DateOfBirth" required="" type="date" class="ng-pristine ng-invalid ng-touched"></input>

                <br></br>


                <button _ngcontent-c1="" class="btn btn-primary forsubmit" type="submit">Submit</button>
                <button _ngcontent-c1="" class="btn btn-secondary" data-dismiss="modal" type="button">Close</button>

            </form>

               <button onClick= {componentDid()}> Done</button>

        </div>
    );


}
export default Enquiryform;