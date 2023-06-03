import { Montserrat } from 'next/font/google';
import { montserrat, montserratSubrayada } from '@/styles/globalStyles';
import bg from '../assets/dev-bg.jpg';
import Image from 'next/image';

export default function FirstPage() {
	const style = {
		main: { fontFamily: montserrat.style.fontFamily },
		bg: { zIndex: '-1', opacity: '.25' },
		title: {
			fontFamily: montserratSubrayada.style.fontFamily,
			background: 'linear-gradient(to right, #AAFF8C, #6B95FF)',
			backgroundClip: 'text',
			WebkitTextFillColor: 'transparent',
		},
		htmlStyle: {
			fontFamily: montserrat.style.fontFamily,
		},
		circularBorder: {
			backgroundColor: 'white',
			width: '2rem',
			height: '2rem',
			borderRadius: '20px',
			position: 'absolute',
			top: '-1.2rem',
			left: '-1rem',
		},
	};

	const htmlOpen = '<';
	const htmlClose = '/>';
	return (
		<div style={style.main}>
			<div className='flex flex-row text-center justify-center pt-3'>
				<h1
					className='text-5xl mr-1'
					style={{
						color: '#AAFF8C',
						fontFamily: montserrat.style.fontFamily,
					}}
				>
					{htmlOpen}
				</h1>
				<h1 className='text-5xl' style={style.title}>
					JNT
				</h1>
				<h1
					className='text-5xl ml-1'
					style={{
						color: '#6B95FF',
						fontFamily: montserrat.style.fontFamily,
					}}
				>
					{htmlClose}
				</h1>
			</div>
			<div className='pl-20 pt-20 text-white' style={style.main}>
				<h2 className='text-5xl'>Julio Nunes</h2>
				<h3 className='text-4xl pt-3'>Front End Web Developer</h3>
			</div>
			<div className='text-white border-l-4 border-t-4 w-[32rem] ml-20 mb-10 relative left-10 mt-10 top-5'>
				<div style={style.circularBorder}></div>
				<div className='pl-5 pt-5'>
					<h4 className='text-3xl'>REACT.JS</h4>
					<h4 className='text-3xl'>NEXT.JS</h4>
					<h4 className='text-3xl'>GIT</h4>
					<h4 className='text-3xl'>GITHUB</h4>
					<h4 className='text-3xl'>STYLED COMPONENTS</h4>
					<h4 className='text-3xl'>TAILWIND | MUI</h4>
					<h4 className='text-3xl'>MOBILE RESPONSIVE DESIGN</h4>
					<h4 className='text-3xl'>AGILE DEVELOPMENT</h4>
				</div>
			</div>
			<Image src={bg} alt='background computer' fill style={style.bg} />
		</div>
	);
}
