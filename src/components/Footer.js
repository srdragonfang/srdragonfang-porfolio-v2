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
						<p>
							Sokunmaru Group | Copyright &copy;
							{today.getFullYear()}
						</p>
						<h4>
							<code>developed by </code>
							<strong className='credits-author'>
								S.R Dragonfang
							</strong>
						</h4>
					</div>
				</footer>
			);
		});
	}
	return <div className='footer'>{socialBar}</div>;
};

export default Footer;
