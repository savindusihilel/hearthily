import React from "react";
import "../css/DisplayShipment.css";
import ShipmentTable from "./ShipmentTable";
import NavBar from "./navBar";
import Search from "./Search";


function DispalyShipment() {
    const today = new Date(); // Get current date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options); // Format date as Monday, January 1, 2023
  
    return (
      <div className="S_container">
        <NavBar/>
        <div className="SS_title">
          <span>Shipment</span>
        </div>
        <ShipmentTable/>
      </div>
    );
  }

export default DispalyShipment;