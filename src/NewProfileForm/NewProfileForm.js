import React from 'react';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import  './NewProfileForm.css';
import PersonalFormField from './PersonalFormField';
import CommonFormField from './CommmonFormField';
import * as localStore from './LocalStore';



// Formik & Yup:  https://github.com/formik/formik  are used to handle
// all the task needed for form.



function * generateStrings(){
  yield "father";
  yield "mother";
  yield "uncle";
  yield "aunt";
}



 const copyValues= (target, values) => {
   var pre ={value:""};
   var prefix = generateStrings();
   (function iterate(obj){
    Object.keys(obj).forEach(key => {
     

      if (typeof obj[key] === 'object') {
         void (!isNaN(key)? pre= prefix.next(): null) ;
            iterate(obj[key]);
          }
          else {
            obj[key] = values[pre.value +key]
            // console.log("-----",pre.value+key, obj[key])
          }
      })

   })(target);
  
}






const NewProfileForm = () =>{
    return(
      <div className ="newProfile">
      <h1>Create a New Profile!</h1>
      <Formik
        initialValues={{
          //personal
          [localStore.firstName]:"",          
          [localStore.lastName]: "",          
          [localStore.rollNumber]:"",
          [localStore.registrationNumber]:"",
          [localStore.dob]:"",
          [localStore.avatar]:"",
          [localStore.batch]:"",
          [localStore.year]:"",
          [localStore.faculty]:"",
          [localStore.address]: "",
          [localStore.phoneNo]: "",

          //parents:
          //father
          [localStore.fatherName]:"",
          [localStore.fatherAvatar]: "",
          [localStore.fatherAddress]:"",
          [localStore.fatherPhone]: "",

          //mother
          [localStore.motherName]:"",
          [localStore.motherAvatar]: "",
          [localStore.motherAddress]:"",
          [localStore.motherPhone]: "",

          //Guardinas
          //uncle 
          [localStore.uncleName]:"",
          [localStore.uncleAvatar]: "",
          [localStore.uncleAddress]:"",
          [localStore.unclePhone]: "",

          //aunt
          [localStore.auntName]:"",
          [localStore.auntAvatar]: "",
          [localStore.auntAddress]:"",
          [localStore.auntPhone]: "",
          }
        }

// the required "attribute of validation" is commented out 
// so that the testing would be easier
        validationSchema={Yup.object({
          [localStore.firstName]: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          [localStore.lastName]: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          
          [localStore.rollNumber]: Yup.number()
            .min(1,"Roll number is never < 1")
            .integer("Invalid Roll number"),
            // .required("Required"),
          [localStore.registrationNumber]: Yup.string()
            .length(9, "Invalid Registartion number"),
            // .required("Required"),
          [localStore.dob]: Yup.date(),
            // .required("Required"),
          [localStore.avatar]: Yup.string().url(),
            // .required("Required"),
          [localStore.batch]: Yup.number()
            .min(1,"Batch number is never < 1"),
            // .required("Required"),
          [localStore.year] : Yup.date().min((new Date()).getFullYear()-85).max((new Date()).getFullYear()),
            // .required("Required"),
          [localStore.faculty]: Yup.string()
            // specify the set of valid values for job type
             .oneOf(
              ["BCT", "BEX", "BEL", "BCE", "BME","B. Arch"],
              "Invalid Job Type"),
            // .required("Required"),

          [localStore.address]: Yup.string(),
          // .required("Required"),

          [localStore.phoneNo]: Yup.string()
          .matches(localStore.phoneRegExp,"Invalid phone number") ,
          
          // [localStore.fatherName]:Yup.string(),
          // [localStore.fatherAvatar]: Yup.string(),
          // [localStore.fatherAddress]:Yup.string(),
          // [localStore.fatherPhone]: Yup.number(),

          [localStore.motherName]:Yup.string(),
          [localStore.motherAvatar]: Yup.string().url(),
          [localStore.motherAddress]:Yup.string(),
          [localStore.motherPhone]: Yup.number(),

          [localStore.uncleName]:Yup.string(),
          [localStore.uncleAvatar]: Yup.string().url(),
          [localStore.uncleAddress]:Yup.string(),
          [localStore.unclePhone]: Yup.number(),

          [localStore.auntName]:Yup.string(),
          [localStore.auntAvatar]: Yup.string().url(),
          [localStore.auntAddress]:Yup.string(),
          [localStore.auntPhone]: Yup.number(),

          

          
            })}
        onSubmit={ (values, {resetForm }) => {
          var arrayOfUsers =[];
           //Performs the deep copying of the Object
           var finalJsonData = JSON.parse(JSON.stringify(localStore.apiResponseStruct));
           //copy form's value to "finalJsonData"
           copyValues(finalJsonData,values);
          
          arrayOfUsers = localStorage.length ? JSON.parse (localStorage.getItem("users")):[];
          arrayOfUsers.push(finalJsonData);
          localStorage.setItem("users", JSON.stringify(arrayOfUsers));   
          
          resetForm({values : ""});



          
        }}
      >
        <Form>
          <h2> Personal:   </h2>
          <PersonalFormField />
  
          <h2> Parents:</h2>
          <h3> Father:</h3>
          <CommonFormField value="father" />

          <h3> Mother:</h3>
          <CommonFormField value="mother" />
        
        
          <h2> Guardians:</h2>
          <h3> Uncle:</h3>
          <CommonFormField value="uncle" />

          <h3> Aunt:</h3>
          <CommonFormField value="aunt" />

         <br/>

          <button className="button" type="submit">Submit</button> <br/>
        </Form>
      </Formik>
    </div>


    );

}

export default NewProfileForm;