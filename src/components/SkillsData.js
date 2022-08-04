import { DiCss3, DiSass, DiResponsive } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { RiHtml5Fill, RiReactjsLine } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillApi } from 'react-icons/ai';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { SiTailwindcss } from 'react-icons/si';
export const SkillsData = [
	{
		title: 'HTML',
		percent: '85%',
		icon: <RiHtml5Fill />,
		isFrontend: 'true',
	},
	{
		title: 'CSS',
		percent: '57%',
		icon: <DiCss3 />,
	},
	{
		title: 'BOOTSTRAP',
		percent: '57%',
		width: 'max-content',
		icon: <BsFillBootstrapFill />,
	},
	{
		title: 'TAILWIND',
		percent: '57%',
		icon: <SiTailwindcss />,
	},
	{
		title: 'SASS',
		percent: '47%',
		icon: <DiSass />,
	},
	{
		title: 'JAVASCRIPT',
		percent: '33%',
		icon: <IoLogoJavascript />,
	},
	{
		title: 'REACT',
		percent: '18%',
		icon: <RiReactjsLine />,
	},
	// {
	// 	title: 'REDUX',
	// 	percent: '18%',
	// 	icon: <RiReactjsLine />,
	// },
    {
		title: 'GIT',
		percent: '21%',
		icon: <AiFillGithub />,
	},
    // {
    //     title: 'AXIOS',
    //     percent: '5%',
    //     icon: <AiFillApi />,
    // },
	{
		title: 'API.Restful',
		percent: '5%',
		icon: <AiFillApi />,
	},
    	{
		title: 'RESPONSIVE WEB DESIGN',
		percent: '21%',
		icon: <DiResponsive />,
	}
];
