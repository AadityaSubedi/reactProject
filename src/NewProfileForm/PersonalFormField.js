import React from 'react';
import {MyTextInput , MySelect} from './StyledField';
import * as localStore from './LocalStore'



 
// returns form field only for the "Personal"
 const PersonalFormField = ()=> {
    return(
      <>
        <MyTextInput
              label="First Name"
              name={localStore.firstName} 
              id = {localStore.firstName}
              type="text"
              placeholder="Aaditya"
              
            />
            <MyTextInput
              label="Last Name"
              name={localStore.lastName}
              id = {localStore.lastName}
              type="text"
              placeholder="Subedi"
            />
            
  
            <MyTextInput
              label="Roll Number"
              name={localStore.rollNumber}
              id={localStore.rollNumber}
              type="number"
              placeholder="61005"
              
            />
            <MyTextInput
              label="Registration Number"
              name={localStore.registrationNumber}
              id = {localStore.registrationNumber}
              type="text"
              placeholder="075BCT001"
            />
            <MyTextInput
              label="Date Of Birth"
              name={localStore.dob}
              id = {localStore.dob}
              type="date"   
              min={((new Date()).getFullYear()-100)+"-01-01"}
              max ={(new Date()).getFullYear()+"-12-31"}      
            />
  
            {/* since uploading image to server isn't handled at this moment
            this "avatar" field is thus supposed to get the URL to image */}
            
            <MyTextInput
              label="Avatar (Input URL)"
              name={localStore.avatar}
              type="text"
              placeholder="https://picsum.photos/200/300"
            /> 
            
            <MyTextInput
              label="Batch"
              name={localStore.batch}
              type="number"
              placeholder="1"
            /> 
            
            <MyTextInput
              label="Year(AD)"
              name={localStore.year}
              type="number"
              placeholder="2018"
            />
  
            <MySelect label="Faculty" name={localStore.faculty}>
              <option value="">Select a faculty</option>
              <option value="BCT">BCT</option>
              <option value="BEX">BEX</option>
              <option value="BEL">BEL</option>
              <option value="BCE">BCE</option>
              <option value="BME">BME</option>
              <option value="B. Arch">B. Arch</option>
            </MySelect>
            
            <MyTextInput
              label="Address"
              name={localStore.address}
              id = {localStore.address}
              type="text"
              placeholder="Kathmandu"
            />
  
            <MyTextInput
              label="Phone No."
              name={localStore.phoneNo}
              id = {localStore.phoneNo}
              type="number"
              placeholder="+97798XXXXXXXX"
            />
      </>
    );
  }

  export default PersonalFormField;