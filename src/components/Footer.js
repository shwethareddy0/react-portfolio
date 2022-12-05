import React from "react";

function Footer() {
  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a
            className="nav-link active"
            href="https://github.com/shwethareddy0"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.linkedin.com/in/swetha-pothuganti-584252202/"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://twitter.com/shwetha88018726">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;