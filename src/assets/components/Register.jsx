 import { useState } from "react";
 import { useNavigate } from "react-router-dom";
 
 
 const Register = () => {
 
     const [registerform,setRegisterform] =useState({firstname:"",age:"",mobile:"",email:"",password:""})
 
     const navigation = useNavigate()
     const datachange = (e)=>{
           setRegisterform({...registerform,[e.target.name]:e.target.value})
     }
     const regsubmit = (e) => {
     e.preventDefault();
 
     if(!registerform.firstname || !registerform.age || !registerform.mobile || !registerform.email || !registerform.password){
              alert("fill the empty field")
              return 
     }
     if(registerform.mobile.length !== 10){
         alert("please enter a valid number")
              return 
 
     }
 
     let data = JSON.parse(localStorage.getItem("userdata")) || [];
 
     data.push(registerform);
 
     localStorage.setItem("userdata", JSON.stringify(data));
     alert("Successfully Registered")
 
     navigation("/login");
 
     setRegisterform({ firstname:"", age:"", mobile:"", email:"", password:"" });
 };
 
 return (
         <>
             <div className="bg-linear-to-br from-gray-200 via-gray-300 to-gray-500 p-6">
 
                 <div className="bg-white p-6 rounded shadow-lg max-w-md mx-auto">
                     <form onSubmit={regsubmit} className="flex flex-col gap-4">
 
                         <div>
                             <label className="font-semibold">Enter your Firstname:</label>
                             <input
                                 type="text"
                                 name="firstname"
                                 value={registerform.firstname}
                                 onChange={datachange}
                                 placeholder="Enter Capital Letter"
                                 className="w-full border p-2 rounded"
                             />
                         </div>
 
                         <div>
                             <label className="font-semibold">Enter age:</label>
                             <input
                                 type="number"
                                 name="age"
                                 value={registerform.lastname}
                                 onChange={datachange}
                                 placeholder="Enter age"
                                 className="w-full border p-2 rounded"
                             />
                         </div>
 
                         <div>
                             <label className="font-semibold">Enter your Mobile No:</label>
                             <input
                                 type="number"
                                 name="mobile"
                                 value={registerform.mobile}
                                 onChange={datachange}
                                 placeholder="Enter 10 digit"
                                 className="w-full border p-2 rounded"
                             />
                         </div>
 
                         <div>
                             <label className="font-semibold">Enter your Email:</label>
                             <input
                                 type="email"
                                 name="email"
                                 value={registerform.email}
                                 onChange={datachange}
                                 placeholder="example123@gmail.com"
                                 className="w-full border p-2 rounded"
                             />
                         </div>
 
                         <div>
                             <label className="font-semibold">Enter Password:</label>
                             <input
                                 type="password"
                                 name="password"
                                 value={registerform.password}
                                 onChange={datachange}
                                 className="w-full border p-2 rounded"
                             />
                         </div>
 
                         <div className="flex justify-center">
                             <button type="submit" className="bg-blue-500 text-white w-32 h-10 flex justify-center items-center rounded" >
                                 Register
                             </button>
                         </div>
 
 
                     </form>
                 </div>
             </div>
         </>
     );
 };
 
 export default Register;
 