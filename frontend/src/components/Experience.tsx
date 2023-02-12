import { ExperienceData } from "../data";
import ExperienceTile from "./ExperienceTile";

const Experience = () => {
	return (
		<div id="experience-section" className="text-white h-screen"> 
			<h1 className="text-3xl text-grey text-center mb-24 md:mb-36">E X P E R I E N C E</h1>
			<ul>
				{ExperienceData.map(value => {
					return(
						<ExperienceTile {...value}/>
					)
				})}
			</ul>
		</div>
	)
}
export default Experience;