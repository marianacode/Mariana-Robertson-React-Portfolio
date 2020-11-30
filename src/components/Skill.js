import React from "react";
import Wrapper from './Wrapper';

function Skills() {
    return (
      <Wrapper>
      <div className="table-responsive">
          <table className="table table-borderless">
            <tbody>
              <tr>
                <th>HTML</th>
                <th>MySQL</th>
                <th>jQuery</th>
                <th>APIs</th>
              </tr>
              <tr>
                <th>CSS</th>
                <th>SQL</th>
                <th>Node.JS</th>
              </tr>
              <tr>
                <th>JavaScript</th>
                <th>MongoDB</th>
                <th>React</th>
              </tr>
            </tbody>
          </table>
      

      <div className="resumeWrapper">
          <a
            type="submit"
            className="Resume"
            // onClick={(event) => (window.location.href = "contact")}
            href="https://drive.google.com/file/d/1zVQoqiTigg3sddCazliCdeJkflIuq4s2/view" 
            rel="noopener noreferrer" 
            target="_blank"
            >
            VIEW MY RESUME
            </a>
      </div>
      </div> 
      </Wrapper>
    );
  }
  
  export default Skills