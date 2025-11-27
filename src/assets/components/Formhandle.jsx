import React, { useState } from 'react'
// import Displaydata from './displaydata';

const Formhandle = () => {
    const [data, setData] = useState({
        name: "",
        address: "",
        mobile: "",
        syllabus: "",
        tech: "",

    });
    const changedata = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    };



    const clicktostore = (e) => {
    e.preventDefault();

    const formdata = JSON.stringify(data);
    console.log("data", formdata);

    localStorage.setItem("usersdata", formdata);

    alert("Successfully done");

    setData({
      name: "",
      address: "",
      mobile: "",
      syllabus: "",
      tech: "",
       
    });
  };


    return (
        <>


       



            <div className="bg-violet-400 p-10 flex justify-center items-center">
        <div className="bg-orange-500 w-[600px] p-6 rounded">
          <form className="grid grid-cols-2 items-center gap-5">
            <label>Enter the Institute Name:</label>
            <input
              type="text"
              name="name"
              value={data.name}
              placeholder="Enter capital Letter"
              className="bg-gray-800 text-white "
              onChange={changedata}
            />

            <label>Enter the Address:</label>
            <textarea
              name="address"
              value={data.address}
              className="bg-gray-800 text-white "
              onChange={changedata}
            ></textarea>

            <label>Enter Mobile no:</label>
            <input
              type="number"
              name="mobile"
              value={data.mobile}
              placeholder="Enter 10 digit"
              className="bg-gray-800 text-white "
              onChange={changedata}
            />
             <label> update Syllabus:</label>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="syllabus"
                  value="Yes"
                  checked={data.syllabus === "Yes"}
                  onChange={changedata}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="syllabus"
                  value="No"
                  checked={data.syllabus === "No"}
                  onChange={changedata}
                />
                No
              </label>
            </div>

            <label> IT related:</label>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="tech"
                  value="Yes"
                  checked={data.tech === "Yes"}
                  onChange={changedata}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="tech"
                  value="No"
                  checked={data.tech === "No"}
                  onChange={changedata}
                />
                No
              </label>
              </div>
             




            <div className="col-span-2 flex justify-center">
              <button
                className="bg-black text-white p-2 rounded-2xl "
                onClick={clicktostore}
              >
                See Details
              </button>
            </div>
          </form>
        </div>
      </div>
<div className="bg-violet-500 mt-3 p-10">
        <h1 className="text-center font-bold">Personal Details</h1>

        <div className="bg-gray-200 p-6 rounded w-[500px] mx-auto flex flex-col justify-center items-center gap-3">
          <form className="grid grid-cols-2 gap-4 items-center">
            <label>Enter Your name:</label>
            <input
              type="text"
              placeholder="Enter Capital Letter"
              className="bg-white  "
            />

            <label>Enter Email id:</label>
            <input
              type="email"
              placeholder="Enter valid email"
              className="bg-white  "
            />

            <label>Enter Mobile no:</label>
            <input
              type="number"
              placeholder="Enter valid mobile no"
              className="bg-white  "
            />

            <div className="col-span-2 flex justify-center">
              <button className="bg-black text-white p-2 rounded-2xl ">
                Login
              </button>
            </div>
          </form>

          
      </div>
      </div>
      <section>


        {/* <Displaydata/> */}
      </section>




        </>
    )
}

export default Formhandle
