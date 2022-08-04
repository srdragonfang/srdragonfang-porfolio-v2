import React from 'react';
import Typed from 'react-typed';
// import AuthorController from './AuthorController';
const Banner = () => {
	return (
		<section className='section banner'>
			<Typed
				strings={[
                    '......',
                    'PRESS F11',
					'RESET  SYSTEM',
					'CODE SOKUNMARU',
					'PORTFOLIO',
                    'ID: S.R Dragonfang',
                    'Password: ----------',
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
