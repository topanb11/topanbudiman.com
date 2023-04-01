import { useEffect, useState } from 'react';
import ExperienceTile from './ExperienceTile';
import { ExperienceCard } from '../interfaces/experience';
import client from '../secrets';

const Experience = () => {
	const [experienceData, setExperienceData] = useState<ExperienceCard[]>([]);

	const getExperienceData = () => {
		client.getEntries<ExperienceCard>({ content_type: 'topan' }).then((res) => {
			const entries = res.items.map((entry) => entry.fields);
			entries.sort((a, b) => a.order - b.order);
			setExperienceData(entries);
		});
	};

	useEffect(() => {
		getExperienceData();
	}, []);

	return (
		<div
			id="experience-section"
			className="min-h-screen text-white overflow-hidden bg-dark pb-24"
		>
			<h1 className="text-3xl text-grey text-center mb-10 tracking-widest">
				E X P E R I E N C E
			</h1>
			<ul>
				{experienceData.map((data, index) => {
					return <ExperienceTile key={index} {...data} />;
				})}
			</ul>
		</div>
	);
};
export default Experience;
