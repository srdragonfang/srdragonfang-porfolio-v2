import React from 'react';
import { AiOutlineExport } from 'react-icons/ai';
const ProjectPremium = ({ data }) => {
	if (data) {
		var projects = data.projects.project.map((item) => {
			return (
				<div className='project__item' key={item.key}>
					<div className='project__item--top'>
						<div className='pit__left'>
							<h2 className='pit__left--title'>{item.title}</h2>
							<div className='pit__left--subtitle'>
								{item.subtitle}
							</div>
						</div>
						<div className='pit__right'>
							<div className='pit__right--description'>
								{item.languages}
							</div>
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
								<img src={item.laptopPath} alt={item.title} />
							</div>
							<div className='pib__frame--mobile'>
                            <img src={item.mobilePath} alt={item.title} />
							</div>
						</div>
					</div>
				</div>
			);
		});
	}
	return (
		<div className='projectPremium'>
			<div className='project__container'>{projects}</div>
		</div>
	);
};

export default ProjectPremium;
