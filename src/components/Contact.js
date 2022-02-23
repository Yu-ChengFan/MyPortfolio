import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const [SuccessMessage, setSuccessMessage] = useState("");
    const { register, handlesubmit, error } = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        const serviceID = "service_ID"
        const templateID = "template_ID"
        const userID = "user_Tl1d7LYD0LUDxq2PQzsRw"

        emailjs.sendForm(serviceID, templateID, form.current, userID)
            .then((result) => {
                setSuccessMessage("Form sent!")
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div  id="contact" className='contacts'>
            <h1>
                Contact Me
            </h1>
            <p>
                Please fill out the form and describe the project you need and I'll contact you.
            </p>
            <div className='container'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='row'>
                        <div className='col-md-6 col-xs-12'>
                            <input type="text" id="name" className='form-control' placeholder='NAME' name='name' />
                            <input type="text" id="phone" className='form-control' placeholder='PHONE' name='phone' />
                            <input type="email" id="email" className='form-control' placeholder='EMAIL' name="email" />
                            <input type="text" className='form-control' placeholder='SUBJECT' name='subject' />
                        </div>
                        <div className='col-md-6 col-xs-12'>
                            <textarea type="text" id='description' className='form-control' placeholder='DESCRIPTION' name='description'></textarea>
                        </div>
                    </div>
                    <button className='contact-btn' type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    )
};

export default Contact