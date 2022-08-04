import React from 'react';
import { FaLanguage } from 'react-icons/fa';
import { AiOutlineExport } from 'react-icons/ai';
import { ImCloudDownload } from 'react-icons/im';

const Projects = ({ data }) => {
	if (data) {
		var projects = data.projects.project.map((item, index) => {
			return (
				<div className='section-item-project' key={index}>
					<div className='image-info'>
						<h3 className='item-title'>{item.title}</h3>
						<p className='flex-row'>
							<FaLanguage
								size={27}
								style={{ marginRight: '1rem' }}
							/>{' '}
							{item.languages}
						</p>
						<div className='buttons'>
							<button className='btn btn-link'>
								<a
									href={item.previewURL}
									target='_blank'
									rel='noreferrer'
								>
									Preview
								</a>
							</button>
							<button className='btn btn-link'>
								<a
									href={item.sourceURL}
									target='_blank'
									rel='noreferrer'
								>
									Source Code
								</a>
							</button>
						</div>
					</div>
				</div>
			);
		});
	}

	return (
		<section className='section project' id='projects-id'>
			<h1>Projects</h1>
			<div className='project__list--row'>{projects}</div>
			<div className='project__info'>
				<div className='project__list--col'>
					<h2>
						get more <span>projects</span> at
					</h2>
					<div className='project__list--buttons'>
						<a
							href='https://github.com/srdragonfang/'
							target='_blank'
							rel='noreferrer'
							className='btn-effect-1 section-item-download'
						>
							<p className='item-show'>github</p>
							<AiOutlineExport className='item-hide' size={30} />
						</a>
						<a
							href='https://codepen.io/srdragonfang/'
							target='_blank'
							rel='noreferrer'
							className='btn-effect-1 section-item-download'
						>
							<p className='item-show'>codepen</p>
							<AiOutlineExport className='item-hide' size={30} />
						</a>
					</div>
				</div>
				<div className='project__list--col'>
					<h2>
						get <span>Curriculum Vitae</span> at
					</h2>
					<div className='project__list--buttons'>
						<a
							href='#about-id'
							className='btn-effect-1 section-item-download'
						>
							<ImCloudDownload size={30} />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
