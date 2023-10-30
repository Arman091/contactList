import React, { useState } from "react";
import "./contactForm.css"
let ContactForm = (props) => {
  

  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneNo] = useState("");
  const [project, setProject] = useState("");
  
 const handleSubmit = (event) => {
   event.preventDefault();
   let user = {
     userName: name,
     userLastName: lastname,
     useremail: email,
     userphoneno: phoneno,
     userProject:project
   }
   props.UserDataHandler(user);
 };
  return (
    <div>
      <h2>Create Client</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          last name
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          phone No
          <input
            type="text"
            value={phoneno}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </label>
        <label>
          project
          <input
            type="text"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          />
        </label>
        <button type="submit">Create Client</button>
      </form>
    </div>
  );
};

export default ContactForm;
