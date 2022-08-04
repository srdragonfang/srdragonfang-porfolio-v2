import React, { useState, useEffect } from 'react';
import './SCSS/style.css';
import Banner from './components/Banner';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
// import .authorCtrl from "./components/.authorCtrl";

function App() {
	const [resumeData, setResumeData] = useState({});
	useEffect(() => {
		fetch('data/resumeData.json')
			.then((res) => res.json())
			.then((data) => {
				setResumeData(data);
			});
	}, []);

	return (
		<div className='App'>
			<Banner />
			<Portfolio data={resumeData.portfolio} />
			<Footer data={resumeData.main} />
		</div>
	);
}

export default App;
