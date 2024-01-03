import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <div className="center">
        <h3> ultimate rule: Live with what you love</h3>
      </div>
      <div className="name">
        <h1>Effortless Hotel Booking</h1>
      </div>
      <div className="n1">
        <i><p>"Booking made easy, experiences made unforgettable.</p>
           Your comfort is just a reservation away."</i>
      </div>
      <div className="style">
        <main className="page-content">
          <div className="card">
            <div className="content">
              <h1 className="title">Book a Room</h1>
              <p className="copy">Find the perfect room for your stay</p>
              <Link to="/BookingForm">
                <button className="btn">Book Now</button>
              </Link>
            </div>
          </div>
        </main>
      </div>

      <nav className="main-menu">
        <ul>
          <li>
            <Link to="/HomePage">
              <i className="fa fa-home fa-2x"></i>
              <span className="nav-text">Home</span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link to="/SignUpPage">
            <i class="fa fa-user fa-2x"></i>
            <span className="nav-text">Sign-Up</span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link to="/LoginPage">
            <i class="fa fa-sign-in fa-2x"></i>
            <span className="nav-text">Login</span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link to="/BookingForm">
            <i class="fa fa-info fa-2x"></i>
              <span className="nav-text">Booking Form</span>
            </Link>
          </li>
        </ul>
          <li className="has-subnav">
            <Link to="/AboutPage">
            <i class="fa fa-comments fa-2x"></i>
              <span className="nav-text">About Us</span>
            </Link>
          </li>
        

        <ul className="logout">
          <li>
            <Link to="/HomePage">
              <i className="fa fa-power-off fa-2x"></i>
              <span className="nav-text">Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
