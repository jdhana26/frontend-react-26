import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [dashboardDatas, setDashboardDatas] = useState(null);
  const navigation = useNavigate();

  const dashboardvalidation = () => {
    const currentcheck = localStorage.getItem("currentUser");

    if (!currentcheck) {
      navigation("/login");
    } else {
      setDashboardDatas(JSON.parse(currentcheck));
    }
  };

  useEffect(() => {
    dashboardvalidation();
  }, []);

  const logouthandle = () => {
    localStorage.removeItem("currentUser");
    navigation("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-orange-950">

      <div className="bg-white border rounded-lg p-6 w-full max-w-sm shadow-sm">

        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Dashboard
        </h1>

        {dashboardDatas && (
          <div className="space-y-3">

            <p className="text-gray-700">
              <span className="font-medium">Name:</span>{" "}
              {dashboardDatas.firstname} {dashboardDatas.lastname}
            </p>

            <p className="text-gray-700">
              <span className="font-medium">Email:</span>{" "}
              {dashboardDatas.email}
            </p>

            <button
              onClick={logouthandle}
              className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-black transition"
            >
              Logout
            </button>

          </div>
        )}
        
      </div>

    </div>
  );
};

export default Dashboard;
