import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Headshot } from '../interfaces/Headshot';
import { Entry } from 'contentful';
import client from '../client';

const DESKTOP_VIEW = 'md:flex-row md:space-x-12';

const About = () => {
	const [aboutPhoto, setAboutPhoto] = useState('');

	const getAboutPhoto = () => {
		client
			.getEntry<Headshot>('2wHqWNRPcnEafmjwJf1L7w')
			.then((res: Entry<Headshot>) =>
				setAboutPhoto(res.fields.imageUrl.fields.file.url)
			);
	};

	useEffect(() => {
		getAboutPhoto();
	}, []);

	return (
		<div
			id="about-section"
			className="min-h-screen bg-dark overflow-hidden pb-24"
		>
			<h1 className="text-3xl text-grey text-center mb-10 tracking-[1rem]">
				ABOUT
			</h1>
			<div
				className={`flex flex-col space-y-6 text-white items-center justify-center ${DESKTOP_VIEW}`}
			>
				<motion.div
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.75 }}
					viewport={{ once: true }}
					variants={{
						visible: { x: 0, opacity: 1 },
						hidden: { x: -100, opacity: 0.5 },
					}}
				>
					<img className="rounded-lg w-80 md:w-[500px]" src={aboutPhoto} />
				</motion.div>
				<div className="text-center md:text-left">
					<h2 className="mb-5 font-semibold text-xl md:text-3xl tracking-wide">
						Here is a <span className="underline">little</span> background
					</h2>
					<p className="w-72 text-justify md:text-left md:w-[700px] md:text-xl">
						I'm Topan! I am in my fourth year of Software Engineering at the
						University of Calgary. My current interests are in full-stack,
						frontend and backend development which is reflected by my work
						experiene and projects. I will be interning at Wave HQ in Toronto
						this upcoming May 2024! In my freetime I also enjoy learning new
						things 💻 working out 💪 playing volleyball 🏐 and photography! 📸
					</p>
				</div>
			</div>
		</div>
	);
};
export default About;
