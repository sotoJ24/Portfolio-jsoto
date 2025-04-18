import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Josué Soto </span>
            from <span className="purple"> Costa Rica</span>
            <br />
            I am an open source software developer.
            <br />
            I have completed Integrated Bachelor's Degree in Systems Engineering.
            <br />
            <br />
           Love for coding and innovation!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Web3
            </li>
            <li className="about-activity">
              <ImPointRight /> Blockchain
            </li>
            <li className="about-activity">
              <ImPointRight /> Smart Contracts 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Focus on self-improvement, learning and building solutions and innovation.!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
