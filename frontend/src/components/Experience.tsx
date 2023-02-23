import { useEffect, useState } from "react";
import ExperienceTile from "./ExperienceTile";
import { ExperienceCard } from "../interfaces/experience";
import client from "../secrets";

const Experience = () => {
	const [experienceData, setExperienceData] = useState([]);

	const getExperienceData = () => {
		client.getEntries({content_type: "topan"})
		.then((res) => {
			let sortedData = res.items.sort((a: ExperienceCard, b: ExperienceCard) => (a.fields.order < b.fields.order ? -1 : 1));
			setExperienceData(sortedData);
		});
	}

	useEffect(() => {
		getExperienceData();
	}, [])

	return (
		<div id="experience-section" className="min-h-screen text-white overflow-hidden bg-dark pb-24"> 
			<h1 className="text-3xl text-grey text-center mb-10 tracking-widest">E X P E R I E N C E</h1>
			<ul>
				{experienceData.map((value, index) => {
					return(
						<ExperienceTile key={index} {...value.fields}/>
					)
				})}
			</ul>
		</div>
	)
}
export default Experience;