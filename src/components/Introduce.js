import React from 'react';
import introduceImg from '../assets/images/banner/bg07.png';
const Introduce = ({ data }) => {
	// if (data) {
	// 	var bio = data.introduce.map((item, index) => (
	// 		<p key={index}>{item.text}</p>
	// 	));
	// }
	return (
		<section className='section introduce' id='introduce-id'>
			<h1>Introduce</h1>
			<div className='introduce__container'>
				<div className='introduce__content'>
					<p>
						Hi. I'm S.R Dragonfang, who <span>loves</span> to write and is a
						Front-end Developer.
					</p>
					<p>
						I love <span>creating and expressing ideas</span> through words and
						symbols.
					</p>
					<p>
						I started pursuing this career about a year ago through
						self-study and keep trying to improve my skills. In the
						process, I have created a number of personal projects
						and hope that you will enjoy it. I would also be happy
						to receive your comments.
					</p>
					<p>
						Thank you for taking the time to visit my "Portfolio".
					</p>
					<p>Wish you a good day.</p>
				</div>

				<div className='introduce__images'>
					<div className='introduce__img'>
						<div className='introduce__img--outer'>
							<div className='introduce__img--inner'>
								<img
									src={introduceImg}
									alt='https://pin.it/1l7LYFl'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Introduce;
