import React from "react";
import { Container } from "./style";
import {
  FaInstagram,
  FaTwitterSquare,
  FaFacebookSquare,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <section className="pre-footer">
        <div className="box-icons">
          <FaInstagram size={"35px"} />
          <FaTwitterSquare size={"35px"} />
          <FaFacebookSquare size={"35px"} />
          <FaPinterest size={"35px"} />
        </div>
        <div className="footer-nav">
          <nav>
            <ul>
              <li>About</li>
              <li>Recipes</li>
              <li>Subscribe</li>
            </ul>
          </nav>
        </div>
      </section>
      <div className="footer">
       <p>Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</p>
      </div>
    </Container>
  );
};

export default Footer;
