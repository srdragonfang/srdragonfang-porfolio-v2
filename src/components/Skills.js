import React from 'react';
import { SkillsData } from './SkillsData';
const Skills = () => {
	return (
		<section className='section skill' id='skills-id'>
			<h1>Skills</h1>
			<div className='skill__container'>
				<artical className='skill__container--content'>
                
                
                </artical>
				<div className='skill__container--list'>
					{SkillsData.map((item, index) => {
						return (
							<div
								className='section-item'
								key={index}
							>
								<div className='item-icon'>{item.icon}</div>
								<div className='item-title item-hide'>
									{item.title}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Skills;
