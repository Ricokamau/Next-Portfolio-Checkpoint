import React from "react"; 

const Footer = () => {
  return (
    <footer className="footer  text-white">
      <div className="container p-12 flex justify-between">
        {/* Replace text with an image */}
        {/*<img src="/images/Logo-white.png" alt="Logo" className="logo" />*/}
        <img src="/images/Logo-white.png" alt="Logo" style={{ width: '50px', height: 'auto' }} className="logo" />
        <p className="text-slate-200">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
