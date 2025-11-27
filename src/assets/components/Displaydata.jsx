import React, { useEffect, useState } from "react";

const Displaydata = () => {
  const [details, setDetails] = useState({});
  const [personal, setPersonal] = useState({});

  
  const institute = () => {
    const data = localStorage.getItem("usersdata");
    const changedDatas = JSON.parse(data);
    setDetails(changedDatas);
  };

  
  const personaldet = () => {
    const pdata = localStorage.getItem("personaldata");
    const changedPData = JSON.parse(pdata);
    setPersonal(changedPData);
  };

  useEffect(() => {
    (async () => {
      await institute();
      await personaldet();
    })();
  }, []);

  return (
    <>
     
      <div className="p-10 bg-orange-400 flex flex-col justify-center items-center gap-2">
        <h1 className="text-xl font-bold">Institute Details</h1>

        <p>Institute Name: {details.name}</p>
        <p>Institute Address: {details.address}</p>
        <p>Institute Mobile No: {details.mobile}</p>
        <p>Syllabus: {details.syllabus}</p>
        <p>Technologies: {details.tech}</p>
         
      </div>

      
      <div className="p-10 bg-blue-200 flex flex-col justify-center items-center gap-2 mt-5">
        <h1 className="text-xl font-bold">Personal Details</h1>

        <p>Name: {personal.pname}</p>
        <p>Email: {personal.pemail}</p>
        <p>Mobile: {personal.pmobile}</p>
      </div>
    </>
  );
};

 
   


export default Displaydata
