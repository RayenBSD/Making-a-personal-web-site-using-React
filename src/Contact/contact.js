import "./contact.css";

import { useState } from "react";
import { send } from "emailjs-com";

const Contact = () => {

    const [isSending, setIsSending] = useState(false);

    const [sendName, setSendName] = useState("");
    const [sendEmail, setSendEmail] = useState("");
    const [message, setMessage] = useState("");

    const submit = (e) => {
        setIsSending(true)
        e.preventDefault();
        
        send (
            "service_bavk97v",
            "template_c5mfoya",
            {sendName, sendEmail, message},
            "TqE8lWQPHIpuVIueg"
        )
        .then ((response) => {
            //console.log(response.text, response.status);
            
        })
        .catch ((err) => {
            //console.log("Failed to send ", err);
        })
        setIsSending(false);
        setMessage ("");
        setSendEmail ("");
        setSendName ("");
    }

    const handleName = (e) => {
        setSendName (e.target.value);
    }
    const handleEmail = (e) => {
        setSendEmail (e.target.value);
    }
    const handleMassege = (e) => {
        setMessage (e.target.value);
    }

    return (
        <article id="form-pg">
            {!isSending && <h1 className="fade-in-right">Contact Me</h1>}
            {isSending && <h1>Please wait</h1>}
            <form onSubmit={submit} className="show">
                <div>
                    <label>Name:</label>
                    <input type="text" name="sendName" placeholder="Enter your name" value={sendName} onChange={handleName} required/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="sendEmail" placeholder="Enter your email" value={sendEmail} onChange={handleEmail} required/>
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name="message" placeholder="Enter your message" value={message} onChange={handleMassege} rows="7" required></textarea>
                </div>
                <div>
                    {!isSending && <button type="submit">Submit</button>}
                    {isSending && <button type="submit" disabled>Submit</button>}
                </div>
            </form>
        </article>
    );
}

export default Contact;