import React from 'react';
import { AiOutlineExport } from 'react-icons/ai';
import { GiAtomicSlashes } from 'react-icons/gi';
// import { AiOutlineExport } from 'react-icons/ai';
import { ImCloudDownload } from 'react-icons/im';

const ProjectPremium = ({ data }) => {
	if (data) {
		var projects = data.projects.project.map((item) => {
			return (
				<div className='project__container'>
					<div className='project__item' key={item.key}>
						<div className='project__item--top'>
							<div className='pit__left'>
								<div className='pit__left--title'>
									<span className='atomicSlashes'>
										<GiAtomicSlashes size={30} />
									</span>
									<h2>{item.title}</h2>
								</div>
								<div className='pit__left--subtitle'>
									{item.subtitle}
								</div>
							</div>
							<div className='pit__right'>
								<div className='pit__right--description'>
									{item.languages}
								</div>
								<p>{item.responsive}</p>
								<div className='pit__right--buttons'>
									<a
										href={item.previewURL}
										target='_blank'
										rel='noreferrer'
									>
										<span>Preview</span>
										<AiOutlineExport size={27} />
									</a>
									<a
										href={item.sourceURL}
										target='_blank'
										rel='noreferrer'
									>
										<span>View Project</span>
										<AiOutlineExport size={27} />
									</a>
								</div>
							</div>
						</div>
						<div className='project__item--bottom'>
							<div className='pib__frame'>
								<div className='pib__frame--laptop'>
									<img
										src={item.laptopPath}
										alt={item.title}
									/>
								</div>
								<div className='pib__frame--mobile'>
									<img
										src={item.mobilePath}
										alt={item.title}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className='row__line'></div>
				</div>
			);
		});
	}
	return (
		<section className='section project' id='projects-id'>
			<h1>Projects</h1>
			<div className='projectPremium'>
				{projects}
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
								<AiOutlineExport
									className='item-hide'
									size={30}
								/>
							</a>
							<a
								href='https://codepen.io/srdragonfang/'
								target='_blank'
								rel='noreferrer'
								className='btn-effect-1 section-item-download'
							>
								<p className='item-show'>codepen</p>
								<AiOutlineExport
									className='item-hide'
									size={30}
								/>
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
			</div>
		</section>
	);
};

export default ProjectPremium;
