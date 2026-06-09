import React from "react";
import "./AboutMe.css";
import profile from '../assets/profile.jpg';


const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
       <img src={profile} alt="Priya Darshini" className="about-img" />


        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Jag är en strukturerad och analytisk utvecklare med starkt fokus på
            användarupplevelse, tydliga flöden och intuitiva digitala lösningar.
            Jag trivs i samarbetande team där man testar, förbättrar och bygger
            hållbara tjänster som gör skillnad.
          </p>
          <p>
            Min bakgrund inom backendutveckling gör att jag förstår tekniska
            begränsningar och möjligheter, vilket hjälper mig skapa design som
            fungerar i verkligheten.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
