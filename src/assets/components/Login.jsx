import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [login, setLogin] = useState({ email: "", password: "" });

    const navigation = useNavigate();

    const logindatachange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const logindataclick = (e) => {
        e.preventDefault();

        const getdata = JSON.parse(localStorage.getItem("userdata")) || [];

        const finddata = getdata.find(
            (x) => x.email === login.email && x.password === login.password
        );

        if (finddata) {
            localStorage.setItem("currentUser", JSON.stringify(finddata));
            setLogin({ email: "", password: "" });

            navigation("/dash");
        } else {
            alert("Enter the valid Email and Password");
        }
    };

    return (
        <>
            <div className="bg-teal-300 p-6 mt-3">

                <div className="bg-white p-6 rounded shadow-lg max-w-md mx-auto">
                    <form onSubmit={logindataclick} className="flex flex-col gap-4">

                        <div>
                            <label className="font-semibold">Enter your Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={login.email}
                                onChange={logindatachange}
                                className="w-full border p-2 rounded"
                            />
                        </div>

                        <div>
                            <label className="font-semibold">Enter Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={login.password}
                                onChange={logindatachange}
                                className="w-full border p-2 rounded"
                            />
                        </div>

                        <div className="flex justify-center">
                            <button type="submit" className="bg-black text-white w-32 h-10 rounded">
                                Login
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
