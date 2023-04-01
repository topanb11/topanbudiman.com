import { useState, useEffect } from 'react';
import SkillTile from './SkillTile';
import { SkillsCard } from '../interfaces/SkillsCard';
import client from '../secrets';

const Skills = () => {
	const [skillData, setSkillData] = useState<SkillsCard[]>([]);

	const getSkills = () => {
		client.getEntries<SkillsCard>({ content_type: 'skillCard' }).then((res) => {
			const entries = res.items.map((entry) => entry.fields);
			entries.sort((a, b) => a.order - b.order);
			setSkillData(entries);
		});
	};

	useEffect(() => {
		getSkills();
	}, []);

	return (
		<div
			id="skills-section"
			className="text-white min-h-screen h-fit overflow-hidden text-center pb-24 bg-dark"
		>
			<h1 className="text-3xl text-grey mb-10 tracking-[1rem]">SKILLS</h1>
			<ul className="flex flex-wrap md:w-[850px] mx-auto justify-center">
				{skillData.map((value, index) => {
					return <SkillTile key={index} {...value} />;
				})}
			</ul>
		</div>
	);
};
export default Skills;
