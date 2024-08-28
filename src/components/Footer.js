import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <menu>
        <li className="img-footer">
          <img
            src={require("../assets/footer-logo.png")}
            alt="Little Lemon logo"
          ></img>
        </li>
        <li className="contact">
          <h1 className="footer-header">Navigation</h1>
          <ul className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a
              href={require("../assets/menu.webp")}
              target="_blank"
              rel="noreferrer"
            >
              Menu
            </a>
            <Link to="/reservations">Reservations</Link>
            <Link to="/order">Order</Link>
            <Link to="/login">Login</Link>
          </ul>
        </li>

        <li>
          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
            <li>Rawcheh,</li>
            <li>Lebano</li>
            <br></br>
            <li>(+961)-81251285</li>
            <br></br>
            <a
              href="mailto:rammalabbass.ar@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              rammalabbass.ar@gmail.com
            </a>
          </ul>
        </li>
        <li>
          <h1 className="footer-header">Connect</h1>
          <ul className="footer-links">
            <a
              href="https://www.facebook.com/rammal.abbass/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/ramalo_abbass/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/abbass-rammal-b480b01b9/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.pinterest.com/rammalabbassar/"
              target="_blank"
              rel="noreferrer"
            >
              Pinterest
            </a>
          </ul>
        </li>
      </menu>
    </footer>
  );
}
