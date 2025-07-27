import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsCaretRight,
} from "react-icons/bs";
import Logo from "../public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-column">
        <div className="footer-logo">
          <Link href="/">
            <Image src={Logo} alt="SawlaTours Logo" />
          </Link>
        </div>
        <div className="footer-contact">
          <h2 className="contact-us">
            <Link href={"/contact-us"}>Contact Us</Link>
          </h2>
          <ul>
            <li>
              <Link href="tel:+25170578306">+251 705 783 06</Link>
            </li>
            <li>
              <a href="mailto:explore@sawlatours.com">Mail Us</a>
            </li>
            <li>
              <a href="https://goo.gl/maps/Hfv6dQPWspUmUYDA6">
                Addis Ababa, Ethiopia
              </a>
            </li>
          </ul>

          <h2 className="contact-us">Office Hours</h2>
          <ul>
            <li>
              <a>Monday - Friday</a>
            </li>
            <li>
              <a>09:00 AM - 5:30 PM</a>
            </li>
          </ul>
          <ul>
            <li>
              <a>Saturday</a>
            </li>
            <li>
              <a>10:00 AM - 1:00 PM</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-column">
        <div className="footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <NavLink href="/">
                <BsCaretRight />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/ethiopian-tour-themes">
                <BsCaretRight />
                Ethiopia Tours
              </NavLink>
            </li>
            <li>
              <NavLink href="/ethiopias-popular-destinations">
                <BsCaretRight />
                Ethiopia Top Destinations
              </NavLink>
            </li>

            <li>
              <NavLink href="/tours-by-experience">
                <BsCaretRight />
                Ethiopia Itineraries by Experience
              </NavLink>
            </li>
            <li>
              <NavLink href="/ethiopia-travel-guide">
                <BsCaretRight />
                Ethiopia Guide
              </NavLink>
            </li>
            <li>
              <NavLink href="/about-us">
                <BsCaretRight />
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink href="/contact-us">
                <BsCaretRight />
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-column">
        <div className="footer-social">
          <h2>Follow Us</h2>
          <ul>
            <li>
              <a href="https://www.instagram.com/sawlatours/">
                <BsInstagram /> <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/SawlaTours">
                <BsTwitter /> <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@SawlaTours">
                <BsYoutube /> <span>YouTube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
