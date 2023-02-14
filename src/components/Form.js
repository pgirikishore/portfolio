import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="https://getform.io/f/a10f576f-0e82-4775-9dfe-ea11e01b2367" method="POST">
            <label>Your Name</label>
            <input type="text" name="name"></input>
            <label>Email</label>
            <input type="email" name="email"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" name="message" />
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form