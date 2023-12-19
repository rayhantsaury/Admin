import React, { useContext } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarCenter">
          <Link to="/" className="link">
            <span className="topbarCenterItem">NEWS</span>
          </Link>
          <Link to="/about" className="link">
            <span className="topbarCenterItem">PRODUCT</span>
          </Link>
          <Link to="/member" className="link">
            <span className="topbarCenterItem">ANGGOTA</span>
          </Link>
          <Link to="/contact" className="link">
            <span className="topbarCenterItem">ADD PRODUCT</span>
          </Link>
          <Link to="/write" className="link">
            <span className="topbarCenterItem">ADD NEWS</span>
          </Link>

          <span className="topbarCenterItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </span>
        </div>
        <div className="topbarRight">
          {user && (
            <Link to="/settings">
              <img
                src={
                  (user.profilePicture !== "")
                    ? PF + user.profilePicture
                    : `../../no-avatar.jfif`
                }
                alt=""
                className="topbarImg"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
