import React from "react";
import "../css/App.css";

function About() {
  return (
    <div
      style={{
        backgroundColor: "#E6FFFA",
        textAlign: "center",
      }}
    >
      <br />
      <h2 style={{ color: "#cc0f34" }}>ABOUT</h2>
      
      <div
        style={{
          padding: "20px",
          backgroundColor: "grey",
          color: "white",
          margin: "20px",
          borderRadius: "20px",
        }}
      >
       
        <div style={{ fontSize: "20px" }}>
        <p>
            Coronavirus disease (COVID-19) is an infectious disease caused by a
            newly discovered coronavirus.
          </p>
          <p>
            Most people who fall sick with COVID-19 will experience mild to
            moderate symptoms and recover without special treatment.
          </p>
        </div>
        <br />
        <br />
        <h3 style={{ color: "black"}}>HOW IT SPREADS</h3>
        <br />
        <div style={{ fontSize: "20px" }}>
        <p>
            The virus that causes COVID-19 is mainly transmitted through
            droplets generated when an infected person coughs, sneezes, or
            exhales. These droplets are too heavy to hang in the air, and
            quickly fall on floors or surfaces.
            You can be infected by breathing in the virus if you are within
            close proximity of someone who has COVID-19, or by touching a
            contaminated surface and then your eyes, nose or mouth.
          </p>
        </div>
        <br />
         <br />
        <h3 style={{ color: "black"}}>SOURCE</h3>
        <br />
        <p>
            {" "}
            <a style={{ fontSize: "20px", color: "white" }}
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
            >
              World Health Organization
            </a>
          </p>
      </div>
      <br />
    </div>
  );
}

export default About;
