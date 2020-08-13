export const phoneRegExp=   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
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