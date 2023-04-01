import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import { useEffect, useState } from 'react';
import { Resume } from '../interfaces/resume';
import client from '../secrets';

const ICONS: Object = {
	fontSize: 35,
	color: '#F7F7F7',
};

const Navbar = () => {
	const [resume, setResume] = useState('');

	const getResume = () => {
		client
			.getEntry<Resume>('46Qc3NETw9OPsZX3rEmqD9')
			.then((res) => setResume(res.fields.assets.fields.file.url));
	};

	useEffect(() => {
		getResume();
	}, []);

	return (
		<div className="relative bg-dark">
			<motion.div
				initial={{ x: -500 }}
				animate={{ x: 0 }}
				transition={{ x: { type: 'spring', duration: 1 } }}
				className="bg-dark text-white h-16 flex flex-row items-center space-x-3 pl-4 py-8"
			>
				<a href="https://www.linkedin.com/in/topanb/" target="_blank">
					<LinkedInIcon sx={ICONS} />
				</a>
				<a href="https://github.com/topanb11" target="_blank">
					<GitHubIcon sx={ICONS} />
				</a>
				<a href={resume} target="_blank">
					<DescriptionIcon sx={ICONS} />
				</a>
			</motion.div>
		</div>
	);
};
export default Navbar;
