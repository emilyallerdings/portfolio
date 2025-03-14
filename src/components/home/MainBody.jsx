import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";
import { mainBody, repos, about, skills } from "../../editable-stuff/config.js";




const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          <Typist>
            <div className="lead typist">
              {message}
            </div>
          </Typist>
          <div className="p-5">
            {
            icons.map((icon, index) => (
              <a
                className={`social-icon-${index}`}
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div>
          <div
          className="resume-btn" 
          >
            <a
              className="btn btn-outline-light btn-lg "
              href={about.resume}
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              aria-label="View my resume."
            >
              My Resume
            </a>
          </div>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
