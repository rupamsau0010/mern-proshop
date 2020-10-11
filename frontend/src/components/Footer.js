import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Container className="text-center py-3">
        Copyright &copy; Proshop {year}. Made with ❤ by <a href="https://github.com/rupamsau0010">rupamsau_0010</a>
      </Container>
    </footer>
  );
};

export default Footer;
