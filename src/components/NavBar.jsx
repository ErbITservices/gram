import { useState } from "react";

function NavBar({ titel }) {
  // const [login, loginstate] = useState();
  return (
    <center>
      <div className="head">
        <div className="logodiv">
          <img
            className="logo"
            src="https://historyofvadodara.in/wp-content/uploads/Central-Library.jpg"
            alt="logo"
          />
        </div>
        <div className="titel">
          <h2>SPORTS, YOUTH & CULTURAL ACTIVITIES DEPARTMENT</h2>
          <br />
          <h4>DIRECTOR OF LIBRARIES GUJARAT STATE, GANDHINAGAR</h4>
        </div>
        <div className="logodiv2">
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIk3ncNbk7_3WbuTUlikL85ZL9dXypXMKyA&s"
            alt="logo"
          />
        </div>
      </div>
    </center>
  );
}
export default NavBar;
