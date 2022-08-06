import React from 'react';
const Footer = ({ data }) => {
	if (data) {
		const today = new Date();
		var socialBar = data.info.map((item, index) => {
			return (
				<footer key={index}>
					<div className='socialBar' id='about-id'>
						<p>CONTACT</p>
						<h1 className='email'>{item.email}</h1>
					</div>
					<div className='credits'>
                        <div className='row__line'></div>
						<p>
							Sokunmaru Group | S.R Dragonfang. Copyright &copy;
							{today.getFullYear()}
						</p>
					</div>
				</footer>
			);
		});
	}
	return <div className='footer'>{socialBar}</div>;
};

export default Footer;
