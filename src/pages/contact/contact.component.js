import React from 'react';
import './contact.styles.scss';

const ContactPage = () => {
	return (
		<div className='contact-container'>
			<h1>Contact Us</h1>
			<div className='contact-section'>
				<h3>PHONE</h3>
				<p>1 (800) 862-7696</p>
				<p>7 DAYS A WEEK</p>
				<p className='time'>9AM - 9PM</p>
			</div>
			<div className='contact-section'>
				<h3>EMAIL</h3>
				<p>support@crown-clothing.com</p>
				<p>Whenever</p>
			</div>
		</div>
	)
};

export default ContactPage;