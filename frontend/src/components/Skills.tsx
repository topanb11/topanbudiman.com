import { useState, useEffect } from "react";
import SkillTile from "./SkillTile";
import { SkillsCard } from "../interfaces/skills";
import client from "../secrets";

const Skills = () => {
	const [skillData, setSkillData] = useState([]);

	const getSkills = () => {
		client.getEntries({content_type: "skillCard"})
		.then(res => {
			let sortedData = res.items.sort((a: SkillsCard, b: SkillsCard) => (a.fields.order < b.fields.order ? -1 : 1));
			setSkillData(sortedData);
		});
	}

	useEffect(() => {
		getSkills();
	}, [])

	return (
		<div id="skills-section" className="text-white min-h-screen h-fit overflow-hidden text-center pb-24 bg-dark">
			<h1 className="text-3xl text-grey mb-10 tracking-widest">S K I L L S</h1>
				<ul className="flex flex-wrap md:w-[850px] mx-auto justify-center">
					{skillData.map((value, index) => {
						return (
							<SkillTile key={index} {...value.fields}/>
						)
					})}
				</ul>
		</div>
	)
}
export default Skills;