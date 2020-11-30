import React from "react";
import mariana from "../Images/Mariana Capture.PNG";

function About() {
    return (
        <div className="App">
            <div className="App-header">
                <span className="about-container">
                    <div className="row">
                        <div className="col-sm-3">
                            <img src={mariana} className="Mariana-Image" alt="Mariana headshot" />
                        </div>

                        <div className="col-sm-9">
                            <div className="about-container-text">
                                <h2 id="about-header">Hello!</h2>
                                <p id="about-text">
                                    My name is Mariana Robertson and I’m a <strong>full stack web developer.</strong> I have a bachelor's degree in Psychology, and a certificate in Software Localization.</p>

                                <p id="about-text">
                                    Challenges and solving problems motivate me. </p>

                                        <p id="about-text">
                                            Empathy, growth-mindset, always seeking to improve and contribute to society are my hobby.</p>

                                        
             
                                            </div>
            </div>
            </div>
          
        </span>
      </div>
    </div>
    
   
  );

    } 
export default About