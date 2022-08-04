import React, { useState } from 'react';
import avatarURL from '../assets/images/avatar.jpg';

const AuthorController = () => {
	const [ctrMenu, setCtrMenu] = useState(false);
	const authCtr = document.querySelector('.authorCtrl');
	window.addEventListener('scroll', () => {
		if (window.scrollY > 1200) {
            authCtr.classList.add('authorCtrl-position');
			authCtr.classList.remove('authorCtrl-position--abs');
		} else {
			authCtr.classList.remove('authorCtrl-position');
			authCtr.classList.add('authorCtrl-position--abs');
		}
	});
	window.onscroll = () => {
		return setCtrMenu(false);
	};
	return (
		<div className='authorCtrl' id='authorCtrl-id'>
			{ctrMenu && (
				<div className='controller__bar--top'>
					<div className='controller__bar--button topLeft btn-effect-1'>
						<a href='#skills-id'>SKILLS</a>
					</div>
					<div className='controller__bar--button topRight btn-effect-1'>
						<a href='#about-id'>CONTACT</a>
					</div>
				</div>
			)}
			<div className='controllers'>
				{ctrMenu ? (
					<div
						className='avatar__outter'
						onClick={() => setCtrMenu(false)}
					>
						<div className='avatar__inner'>
							<img src={avatarURL} alt='' />
						</div>
					</div>
				) : (
					<div
						className='avatar__outter'
						onClick={() => setCtrMenu(true)}
					>
						<div className='avatar__inner'>
							<img src={avatarURL} alt='' />
						</div>
					</div>
				)}
			</div>
			{ctrMenu && (
				<div className='controller__bar--bottom'>
					<div className='controller__bar--button bottomLeft btn-effect-1'>
						<a href='#projects-id'>PROJECTS</a>
					</div>
					<div className='controller__bar--button bottomRight btn-effect-1'>
						<a href='#introduce-id'>INTRODUCE</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default AuthorController;
