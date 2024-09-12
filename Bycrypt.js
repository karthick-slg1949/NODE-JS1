import bcrypt from 'bcryptjs'

let userDetails={
    name:'karthick',
    email:'karthick@gmail.com',
    password:'12345678'
}
let newpassword=bcrypt.hashSync(userDetails.password,10);
console.log('current password :',userDetails.password);
console.log('new password :',newpassword);
