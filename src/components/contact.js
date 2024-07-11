import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Contactimg from '../assets/email1.png';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_nckbj5n', // Replace with your EmailJS service ID
            'template_h0fhkcn', // Replace with your EmailJS template ID
            formData,
            'mRpq_3MmeCmGWNpPD' // Replace with your EmailJS user ID
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setStatusMessage('Your message has been sent successfully!');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        })
        .catch((err) => {
            console.error('FAILED...', err);
            setStatusMessage('Failed to send your message. Please try again.');
        });
    };

    return (
        <section id='contact' className='bg-back px-5 py-20 md:px-10 md:py-20'>
            <div className="w-full pb-10">
                <div className='flex justify-center'>
                    <h1 className='text-2xl md:text-3xl mb-4 md:mb-7 font-hero-font font-bold relative pb-2'>
                        Contact Me
                        <span className='block absolute bottom-0 left-0 w-5/6 border-b-4 '></span>
                    </h1>
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:items-center'>
                <div className='md:w-1/2 flex justify-center mb-10 md:mb-0 px-5'>
                    <img src={Contactimg} alt="Contact" className='w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg'/>
                </div>
                <div  className='md:w-1/2 px-5'>
                    <div id='contactform' className="max-w-md mx-auto  p-8 rounded-md border  shadow-md">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border text-black bg-back1 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium ">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 bg-back1 block w-full px-3 py-2 border text-black  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium ">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 bg-back1 block w-full px-3 py-2 border text-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-back1 py-2 px-4 text-black rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                            >
                                Send Message
                            </button>
                        </form>
                        {statusMessage && (
                            <p className="mt-4 text-center ">{statusMessage}</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
