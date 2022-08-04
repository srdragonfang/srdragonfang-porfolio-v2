import React from 'react';
import { ImCloudDownload } from 'react-icons/im';

const Certificates = ({ data }) => {
	// if (data) {
	// 	var itemPDF = data.certificates.frontEnd.map((item, index) => {
	// 		return (
	// 			<div className='section-item btn-effect-1' key={index}>
	// 				<div className='item-title'>{item.title}</div>
	// 			</div>
	// 		);
	// 	});
	// }
	return (
		<section className='section' id='cv-id'>
			<h1>Certificates & Curriculum Vitae</h1>
			<div className='section-list'>
				<div className='btn-effect-1 section-item-download'>
					<a href='#contact-id' className='item-hide'>
						Get CV
					</a>
					<ImCloudDownload className='item-icon' />
				</div>
			</div>
		</section>
	);
};

export default Certificates;
