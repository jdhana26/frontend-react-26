import React, { useState } from 'react';
// import Displaydata from './displaydata';

const Formhandle = () => {
  const [data, setData] = useState({
    name: "",
    address: "",
    mobile: "",
    syllabus: "",
    tech: "",
  });

  const [personal, setPersonal] = useState({
    pname: "",
    pemail: "",
    pmobile: "",
  });

  const changedata = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handlePersonal = (e) => {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };

  const clicktostore = (e) => {
    e.preventDefault();

    const formdata = JSON.stringify(data);
    console.log("Institute Data:", formdata);

    localStorage.setItem("usersdata", formdata);

    alert("Institute Info Saved");

    setData({
      name: "",
      address: "",
      mobile: "",
      syllabus: "",
      tech: "",
    });
  };

  const savePersonalData = (e) => {
    e.preventDefault();

    const pdata = JSON.stringify(personal);
    console.log("Personal Data:", pdata);

    localStorage.setItem("personaldata", pdata);

    alert("Personal Info Saved");

    setPersonal({
      pname: "",
      pemail: "",
      pmobile: "",
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
              className="bg-gray-800 text-white"
              onChange={changedata}
            />

            <label>Enter the Address:</label>
            <textarea
              name="address"
              value={data.address}
              className="bg-gray-800 text-white"
              onChange={changedata}
            ></textarea>

            <label>Enter Mobile no:</label>
            <input
              type="number"
              name="mobile"
              value={data.mobile}
              placeholder="Enter 10 digit"
              className="bg-gray-800 text-white"
              onChange={changedata}
            />

            <label>Update Syllabus:</label>
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

            <label>IT related:</label>
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
                className="bg-black text-white p-2 rounded-2xl"
                onClick={clicktostore}
              >
                Save Institute Details
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* PERSONAL FORM */}
      <div className="bg-violet-500 mt-3 p-10">
        <h1 className="text-center font-bold">Personal Details</h1>

        <div className="bg-gray-200 p-6 rounded w-[500px] mx-auto flex flex-col justify-center items-center gap-3">
          <form className="grid grid-cols-2 gap-4 items-center">
            <label>Enter Your Name:</label>
            <input
              type="text"
              name="pname"
              value={personal.pname}
              placeholder="Enter Capital Letter"
              className="bg-white"
              onChange={handlePersonal}
            />

            <label>Enter Email id:</label>
            <input
              type="email"
              name="pemail"
              value={personal.pemail}
              placeholder="Enter valid email"
              className="bg-white"
              onChange={handlePersonal}
            />

            <label>Enter Mobile no:</label>
            <input
              type="number"
              name="pmobile"
              value={personal.pmobile}
              placeholder="Enter valid mobile no"
              className="bg-white"
              onChange={handlePersonal}
            />

            <div className="col-span-2 flex justify-center">
              <button
                className="bg-black text-white p-2 rounded-2xl"
                onClick={savePersonalData}
              >
                Save Personal Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Formhandle;
