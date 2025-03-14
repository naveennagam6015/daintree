



import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.png';

export default function Nav() {
  const location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar navbg fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} width={200} alt="IT Solutions" className="rounded-lg shadow-lg" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className={`text-white nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`text-white nav-link ${location.pathname === '/About-Us' ? 'active' : ''}`} to="/About-Us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`text-white nav-link ${location.pathname === '/What-we-Offer' ? 'active' : ''}`} to="/What-we-Offer">
                  What We Offer
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`text-white nav-link ${location.pathname === '/Case-Studies' ? 'active' : ''}`} to="/Case-Studies">
                  Case Studies
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`text-white nav-link ${location.pathname === '/Contact' ? 'active' : ''}`} to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='nav-adj' ></div>
    </div>
  );
}










// import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './assets/logo.png';

// export default function Nav() {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark navbg fixednav">
//         <div className="container-fluid">
//           <a className="navbar-brand text-primary" href="#">
//             <img src={logo} width={200} alt="IT Solutions" className="rounded-lg shadow-lg" />

//           </a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <a className="nav-link active   " href="#">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">About Us</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">What we Offer</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Case Studies</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Contact Us</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }
