import React, { useEffect, useState } from "react";
import "./dashboard.css"; // Make sure to import your CSS file

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // State to manage sidebar open/close

  useEffect(() => {
    const handleSidebarToggle = () => {
      setSidebarOpen((prevState) => !prevState); // Toggle sidebar state
    };

    const handleArrowClick = (e) => {
      const arrowParent = e.target.parentElement.parentElement;
      arrowParent.classList.toggle("showMenu");
    };

    const sidebarBtn = document.querySelector(".bx-menu");
    sidebarBtn.addEventListener("click", handleSidebarToggle);

    const arrows = document.querySelectorAll(".arrow");
    arrows.forEach((arrow) => {
      arrow.addEventListener("click", handleArrowClick);
    });

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      sidebarBtn.removeEventListener("click", handleSidebarToggle);
      arrows.forEach((arrow) => {
        arrow.removeEventListener("click", handleArrowClick);
      });
    };
  }, []); // Empty dependency array ensures that this effect runs only once after the component mounts

  return (
    <>
      <div className={` blueee     sidebar ${sidebarOpen ? "open" : "close"}`}>
        <div className="logo-details">
          <p className="text-light">LOGO</p>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">
              <i className="bx bx-grid-alt"></i>
              <span className="link_name">Order</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Order
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-grid-alt"></i>
              <span className="link_name">Shipment</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Shipment
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-grid-alt"></i>
              <span className="link_name">Manifest</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Manifest
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <div className="home-content">
          <i className="bx bx-menu"></i>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
