import React, { useRef } from 'react';
import { sendEmail } from '../../Functions/mailFunctions';


const ContactForm = () => {
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;


    const form = useRef('');

    return (
        <div className="container p-4">
            <form ref={form} onSubmit={(e) => sendEmail(e, form, templateID, serviceID, publicKey)}>
            {/* Full Name Input */}
                <div className="form-group pb-2">
                    <label for="inputName">Full Name:</label>
                    <input type="text" className="form-control" name="inputName" aria-describedby="nameHelp" placeholder="Enter Your Full Name"></input>
                </div>
            {/* Email Address Input */}
                <div className="form-group pb-2">
                    <label for="inputEmail">Email address</label>
                    <input type="email" className="form-control" name="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">Please enter a valid email to facilitate us getting back to you.</small>
                </div>
            {/* Message Input */}
                <div className="form-group pb-2">
                    <label for="inputMessage">Message:</label>
                    <textarea className="form-control" name="inputMessage" rows="4"></textarea>
                </div>
            {/* Button */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;