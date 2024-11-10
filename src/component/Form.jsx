import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './FormStyles.css';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_golg116',   // your EmailJS Service ID
            'template_nmbrcnb',   // your EmailJS Template ID
            {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
            },
            'Grttjt2PEeL3sjEVA'        // your EmailJS User ID
        ).then(
            (result) => {
                alert('Email sent successfully!');
            },
            (error) => {
                alert('Failed to send email. Please try again later.');
                console.error(error);
            }
        );
    };

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label>Your Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label>Subject</label>
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                />

                <label>Message</label>
                <textarea
                    rows="6"
                    name="message"
                    placeholder="Type your message here"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>

                <button className='btn' type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
