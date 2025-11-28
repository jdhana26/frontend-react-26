








import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide">
            React Tasks
          </div>

          {/* Links */}
          <div className="flex gap-6">

            <Link 
              className="hover:text-yellow-400 transition duration-300 text-lg" 
              to="/"
            >
              Register
            </Link>

            {/* <Link 
              className="hover:text-yellow-400 transition duration-300 text-lg" 
              to="/login"
            >
              Login
            </Link>

            <Link 
              className="hover:text-yellow-400 transition duration-300 text-lg" 
              to="/dash"
            >
              Dashboard
            </Link> */}

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
































// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//       <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
          
//           {/* Logo */}
//           <div className="text-2xl font-bold tracking-wide">
//             React tasks
//           </div>

//           {/* Links */}
//           <div className="flex gap-6">
//             {/* <Link 
//               className="hover:text-yellow-400 transition duration-300 text-lg" 
//               to="/"
//             >
//               Home
//             </Link> */}

             
//             <Link 
//               className="hover:text-yellow-400 transition duration-300 text-lg" 
//               to="/"
//             >
//               Form
//             </Link>

//             <Link 
//               className="hover:text-yellow-400 transition duration-300 text-lg" 
//               to="/Displaydata"
//             >
//               Details
//             </Link>
//             <Link 
//               className="hover:text-yellow-400 transition duration-300 text-lg" 
//               to="/Register"
//             >
//               Details
//             </Link>
            
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
