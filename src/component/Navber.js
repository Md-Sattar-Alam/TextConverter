// import { type } from "@testing-library/user-event/dist/type";
// import React, { useContext, useReducer } from "react";
// import { AppContext } from "../context/AppContext";
// import PropTypes from "prop-types";

// export default function Navber(props) {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">
//             {props.thisAbout}
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="/navbarTogglerDemo02"
//             aria-controls="navbarTogglerDemo02"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-NavLink active" aria-current="page" href="/">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item active">
//                 <a className="nav-NavLink" aria-current="page" href="/">
//                   TextUtile
//                 </a>
//               </li>
//             </ul>
//             <form className="d-flex" role="search">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button className="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }
import { NavLink } from "react-router-dom";

export const Navber = () => {
  //   const navLinkStyle = ({ isAction }) => {
  //     return {
  //       fontWeight: isAction ? "bold" : "normal",
  //     };
  //   };

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Navber;
