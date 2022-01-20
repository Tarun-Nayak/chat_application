import React from "react";
import "./Join.css";
import logo from "../../images/pp-removebg.png";
import { Link } from "react-router-dom";
import { useState } from "react";

let user;
const sendUser = () => {
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = "";
};

const Join = () => {
  const [name, setname] = useState("");
  console.log(name);

  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img src={logo} alt="" />
        <h1>CHAT APPLICATION</h1>
        <input
          onChange={(e) => setname(e.target.value)}
          placeholder="Enter Your Name "
          type="text"
          id="joinInput"
        />
        <Link
          onClick={(event) => (!name ? event.preventDefault() : null)}
          to="/chat"
        >
          <button onClick={sendUser} className="joinbtn">
            Start Chating
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
export { user };
