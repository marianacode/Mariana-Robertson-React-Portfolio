import React, { Component } from 'react';
import * as emailjs from "emailjs-com";
import github from "../Images/Github.jpg";
import linkedin from "../Images/Linkedln.jpg";

const EmailJSID = process.env.REACT_APP_EMAILJS_USERID;
const Email_address = process.env.TO_NAME;


class ContactPage extends Component {
    constructor(props) {
    super(props);
    
    this.state = {
        name: "",
        email: "",
        feedback: "",
        };
    }

    handleInputChange(event) {
      event.preventDefault();
      const target = event.target;
      const name = target.name;
      const value = target.value;

      this.setState({ [name]: value });
    }

    sendMessage(event) {
        event.preventDefault();
        
        const templateParams = {
          from_name: this.state.name + " (" + this.state.email + ")",
          to_name: `${Email_address}`,
          feedback: this.state.feedback
        };
    
        emailjs
          .send("gmail", "mariana_personal_portfolio", templateParams,`${EmailJSID}`)
          .then(
            function(response) {
              console.log("EMAIL SUCCESSFULLY SENT", response.status, response.text);
            },
            function(error) {
              console.log("EMAIL DID NOT SEND!", error);
            }
          );

        this.setState({
            name: "",
            email: "",
            feedback: ""
            });
        }

render() {
  return (
    <main id="main-contact">
        <div className="page-header">Contact</div>
        <p id="contact-page-text"> If you want to connect, please send a message here!</p>

        <div className="icons">

        <a href="https://github.com/marianacode" rel="noopener noreferrer" target="_blank">
        <img src={github} className="icon-github" alt="Github Icon" /></a>
       
        <a href="https://www.linkedin.com/in/mariana-robertson-00626285/" rel="noopener noreferrer" target="_blank">
         <img src={linkedin} className="icon-linkedin" alt="LinkedinIcon" /></a>
        
        </div>

          <div className="contact-form">
            <form
              className="ui-form"
              id={this.props.id}
              name={this.props.name}
              method={this.props.method}
              action={this.props.action}
              style={{display: "block", textAlign:"center" }}
            >
              <textarea
                  id="name"
                  name="name"
                  onChange={this.handleInputChange.bind(this)}
                  placeholder="your name"
                  required
                  value={this.state.name}
                  style={{ width: "80%", borderRadius:".5rem", padding:"10px", paddingLeft:"20px"}}
                  rows={1}
              />
              <br />
              <textarea
                  id="email"
                  name="email"
                  onChange={this.handleInputChange.bind(this)}
                  placeholder="your email address"
                  required
                  value={this.state.email}
                  style={{ width: "80%", borderRadius:".5rem", padding:"10px", paddingLeft:"20px"}}
                  rows={1}
              />
              <br />
              <textarea
                  id="feedback"
                  name="feedback"
                  onChange={this.handleInputChange.bind(this)}
                  placeholder="your message..."
                  required
                  value={this.state.feedback}
                  style={{ width: "80%", borderRadius:".5rem", padding:"10px", paddingLeft:"20px", height:"400px"}}/>
              <br />
              <input
                  type="button"
                  value=" Send "
                  id="contact-button"
                  className="uibutton"
                  onClick={this.sendMessage.bind(this)}
              />
        </form>
      </div>
    </main>
    );
  };
}

export default ContactPage