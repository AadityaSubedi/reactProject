//localStorage: variable to be used in form creation process


export const phoneRegExp=   /^(\+977)?9[78](\d{8})$/

// defines basic frame of nested structure (as in API response) so that tha data 
// in the localStorage has the same structure as in API response.
export const apiResponseStruct = {
  first_name: "",
  last_name: "",
  dob: "",
  avatar: "",
  roll_number: "",
  registration_number: "",
  batch:"" ,
  year: "" ,
  faculty: "",
  contact: {
              address: "",
              phone: ""
            },
  parents: [
              {
                name: "",
                avatar: "",
                address: {
                contact: {
                            address: "",
                            phone: ""
                          }
                          }
              },
              {
                name: "",
                avatar: "",
                address: {
                    contact: {
                        address: "",
                        phone: ""
                    }
                  }
                }
            ],
  guardians: [
      {
        name: "",
        avatar: "",
        address: {
        contact: {
                address: "",
                phone: ""
                }
              }
        },
        {
        name: "",
        avatar: "",
        address: {
              contact: {
                    address: "",
                    phone: ""
                    }
                  }
        }
      ]
 }


 
// This makes code dynamic
// The variable is suppose to store the value for the "name" attribute in each "input" field.
export const firstName = "first_name";
export const lastName = "last_name";
export const rollNumber= "roll_number";
export const registrationNumber  ="registration_number";
export const dob = "dob";
export const avatar= "avatar"; 
export const batch ="batch";
export const year = "year";
export const faculty ="faculty";
export const address = "address";
export const phoneNo = "phone";
export const fatherName = "fathername"
export const fatherAvatar= "fatheravatar"
export const fatherAddress= "fatheraddress"
export const fatherPhone= "fatherphone"
export const motherName= "mothername"
export const motherAvatar= "motheravatar"
export const motherAddress= "motheraddress"
export const motherPhone= "motherphone"
export const uncleName= "unclename"
export const uncleAvatar= "uncleavatar"
export const uncleAddress= "uncleaddress"
export const unclePhone= "unclephone"
export const auntName= "auntname"
export const auntAvatar= "auntavatar"
export const auntAddress= "auntaddress"
export const auntPhone= "auntphone"