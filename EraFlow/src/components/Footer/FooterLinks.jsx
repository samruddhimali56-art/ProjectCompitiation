import React from "react";

const FooterLinks = ({ title, links }) => {
  return (
    <div className="footer-column">
      <h3>{title}</h3>

      {links.map((link, index) => (
        <a href={link.path} key={index}>
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;