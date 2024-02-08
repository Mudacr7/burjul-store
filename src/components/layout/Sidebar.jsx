import React, { useEffect, useState } from "react";
import "./layout.css";
import truck from "../../assets/images/truckico.png";
import order from "../../assets/images/orderico.png";
import manifest from "../../assets/images/manifestico.png";

const Sidebar = () => {
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
    }, []);

    return (
        <>
            <div className={` blueee     sidebar ${sidebarOpen ? "open" : "close"}`}>
                <div className="logo-details">
                    <p className="text-light">LOGO</p>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="#">
                            <i>  <img src={order} alt="" srcset="" /></i>
                            <span className="link_name">Order</span>
                        </a>

                    </li>
                    <li>
                        <a href="#">
                            <i>  <img src={truck} alt="" srcset="" /></i>
                            <span className="link_name">Shipment</span>
                        </a>

                    </li>
                    <li>
                        <a href="#">
                            <i>  <img src={manifest} alt="" srcset="" /></i>
                            <span className="link_name">Manifest</span>
                        </a>

                    </li>
                </ul>
            </div>

        </>
    );
};

export default Sidebar