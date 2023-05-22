import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className=" footer">
      <div className="follow-section">
        <h4>Follow</h4>
        <FaInstagram />
        <FaTwitter />
        <FaFacebook />
        <FaLinkedin />
      </div>
      <div>
        <h4 className="title">User Area</h4>
        <p>My account</p>
        <p>My Cart</p>
        <p>Login</p>
        <p>Checkout</p>
      </div>
      <div>
        <h4 className="title">Shopping Guide</h4>
        <p>Payment</p>
        <p>Shipment</p>
        <p>FAQ</p>
        <p>Return Policy</p>
      </div>
      <div>
        <h4 className="title">Site Map</h4>
        <p>Payment</p>
        <p>Shipment</p>
        <p>FAQ</p>
        <p>Return Policy</p>
      </div>
      <div>
        <h4 className="title">Contact Details</h4>
        <p>Email</p>
        <p>Phone</p>
        <p>Address</p>
        <p>Post</p>
      </div>
    </div>
  );
};

export default Footer;
