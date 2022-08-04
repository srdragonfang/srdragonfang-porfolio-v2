import React from 'react';
import introduceImg from '../assets/images/banner/bg07.png';
const Introduce = ({ data }) => {
	if (data) {
		var bio = data.introduce.map((item, index) => (
			<p key={index}>{item.text}</p>
		));
	}
	return (
		<section className='section introduce' id='introduce-id'>
			<h1>Introduce</h1>
			<div className='introduce__container'>
				<div className='introduce__content'>{bio}</div>

				<div className='introduce__content'></div>
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
						<div className='introduce__img--outer'>
							<div className='introduce__img--inner'>
								<img
									src={introduceImg}
									alt='https://pin.it/1l7LYFl'
								/>
							</div>
						</div>
					</div>
					<div className='introduce__img'>
						<div className='introduce__img--outer'>
							<div className='introduce__img--inner'>
								<img
									src={introduceImg}
									alt='https://pin.it/1l7LYFl'
								/>
							</div>
						</div>
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
