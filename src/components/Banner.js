import React from 'react';
import Typed from 'react-typed';
// import AuthorController from './AuthorController';
const Banner = () => {
	return (
		<section className='banner'>
			<Typed
				strings={[
					'RESET  SYSTEM',
					'CODE SOKUNMARU',
					'ID: PORTFOLIO',
                    'PW: S.R Dragonfang',
					'LOGIN',
					'LOADING...0%',
					'LOADING...1%',
					'LOADING...2%',
					'LOADING...3%',
					'LOADING...',
					'LOADING...99%',
					'LOADING...100%',
					'LOGIN SUCCESS',
					'HI',
					'BOUJOUR',
					'こんにちは',
					'XIN CHAO',
					'I am S.R Dragonfang',
                    'A creator, author and front-end developer.',
                    'I love the creativity and beauty of art through letters and words.',
					'THIS IS A STORY A...ABOUT...ME...E..E',
					'Warning!',
					'ERROR!!!',
				]}
				typeSpeed={100}
				backSpeed={10}
				loop
			/>
		</section>
	);
};

export default Banner;
