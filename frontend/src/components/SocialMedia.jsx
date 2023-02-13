import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/houssam-mrabet-6b758a176/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href="https://twitter.com/MrabetHoussam" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
      <a href="https://www.instagram.com/houssam_mrabet_/" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
      <a href="https://www.facebook.com/houbet" target="_blank" rel="noreferrer">
        <FaFacebook />
      </a>
    </div>
  );
};

export default SocialMedia;
