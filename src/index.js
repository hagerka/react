import React from "react";
import ReactDOM from "react-dom/client";
import Email from "./email-8-svgrepo-com.svg";
import LinkedIn from "./linkedin-outline-svgrepo-com.svg";
import Phone from "./phone-svgrepo-com.svg";
import Address from "./address-location-map-svgrepo-com.svg";
import "./app.css";

function Resume() {
  return (
    <div>
      <Heading />
      <Content />
      <Footer />
    </div>
  );
}

const Heading = () => {
  return (
    <header>
      <h1 id="name">Kimberly Hager</h1>
      <h2 id="position">Senior Digital Interactives Developer</h2>
    </header>
  );
};

const Content = () => {
  return (
    <div className="content">
      <section className="exp">
        <h3>Experience</h3>
        <ul className="clean">
          <Experience1 />
          <Experience2 />
          <Experience3 />
        </ul>
      </section>
      <Skills />
      <Awards />
      <Schooling />
    </div>
  );
};

const Experience1 = () => {
  return (
    <li id="exp1">
      <h4>Senior Digital Interactives Developer</h4>
      <p className="emphasis">Great Minds, Remote / March 2020 - Present</p>
      <ul>
        <li>
          Led User Acceptance Testing efforts for over 200 digital lessons
        </li>
        <li>
          Designed and authored over 160 digital interactives using JavaScript
          and GeoGebra to help students visualize and explore abstract
          mathematical concepts
        </li>
        <li>
          Retrofitted and redesigned interactives to conform to Web Content
          Accessibility Guidelines 2.1 Level AA
        </li>
        <li>
          Counseled lesson writers on how best to integrate digital technology
          into print materials
        </li>
        <li>
          Used project management software to prioritize and communicate
          progress on projects
        </li>
        <li>Maintained codebase using GitHub</li>
        <li>Created and maintained documentation of code</li>
        <li>Analyzed curriculum for evidence of bias and proposed solutions</li>
      </ul>
    </li>
  );
};
const Experience2 = () => {
  return (
    <li id="exp2">
      <h4>Math and Physics Teacher</h4>
      <p className="emphasis">
        Our Lady of Good Counsel High School, Olney, MD / August 2008 – June
        2020
      </p>
      <ul>
        <li>
          Developed curriculum, activities, and assessments to meet the diverse
          needs of 125 students per year
        </li>
        <li>
          Created 8 Desmos-based projects per year to encourage digital literacy
          and creative thinking
        </li>
        <li>
          Identified and adapted lessons for students with learning disabilities
          using educational technology
        </li>
        <li>Differentiated instruction to accommodate all students’ needs</li>
      </ul>
    </li>
  );
};
const Experience3 = () => {
  return (
    <li id="exp3">
      <h4>Research Assistant</h4>
      <p className="emphasis">
        University of Maryland Baltimore County, Baltimore, MD / June 2006 –
        August 2008
      </p>
      <ul>
        <li>
          Modeled atmospheric data pertaining to pyro-cumulonimbus clouds using
          Mathematica and MATLAB
        </li>
        <li>Maintained precise weather records on a Linux system</li>
        <li>
          Analyzed data pertaining to plant fluorescence after application of
          DCMU using Excel
        </li>
        <li>Analyzed data from remote sensing satellites</li>
        <li>
          Performed experiments on corn and pepper plants in the USDA fields
        </li>
      </ul>
    </li>
  );
};
const Skills = () => {
  return (
    <section className="skills">
      <h3>Skills</h3>
      <ul class="bullets">
        <li>JavaScript/HTML/CSS</li>
        <li>Accessible design</li>
        <li>Problem solving</li>
        <li>Instructional design</li>
        <li>Self-directed learner</li>
        <li>Adaptable</li>
        <li>Effective communicator</li>
      </ul>
    </section>
  );
};
const Awards = () => {
  return (
    <section class="awards">
      <h3>Awards</h3>
      <div id="award1">
        <h4>Imagine That Award</h4>
        <p>
          Great Minds
          <br />
          June 2021
        </p>
      </div>
    </section>
  );
};
const Schooling = () => {
  return (
    <section class="edu">
      <h3>Education</h3>
      <h4>Masters, Leadership in Teaching</h4>
      <p class="emphasis">
        Notre Dame of Maryland University, Baltimore, MD / 2009 - 2012
      </p>
      <h4>Bachelor of Arts, Physics</h4>
      <p class="emphasis">
        Notre Dame of Maryland University, Baltimore, MD / 2003 - 2007
      </p>
    </section>
  );
};
const Footer = () => {
  return (
    <footer className="full-width">
      <h3>Contact Information</h3>
      <div id="contact">
        <a id="email" href="mailto:hager.kimberly.a@gmail.com">
          <img alt="email icon" src={Email} width="45px" height="45px" />
          hager.kimberly.a@gmail.com
        </a>
        <a id="phone" href="tel:4433408607" target="_blank" rel="noreferrer">
          <img alt="phone icon" src={Phone} width="45px" height="45px" />
          (443)340-8607
        </a>
        <a
          id="linkedin"
          href="https://www.linkedin.com/in/kimberly-hager-97448317b/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin icon" src={LinkedIn} width="45px" height="45px" />
          LinkedIn Profile
        </a>
        <a
          href="https://www.google.com/maps/place/11583+Liberty+Oak+Dr,+Frederick,+MD+21701/@39.4916085,-77.2691719,17z/data=!3m1!4b1!4m6!3m5!1s0x89c9cc36fae5d6bd:0xfc526d6b0894f5d3!8m2!3d39.4916085!4d-77.2669832!16s%2Fg%2F11c4ljcjps"
          id="address"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="address icon" src={Address} width="45px" height="45px" />
          11583 Liberty Oak Drive, Frederick, MD 21701
        </a>
      </div>
    </footer>
  );
};

export default Resume;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Resume />);
