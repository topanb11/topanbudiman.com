import { SkillData } from "../data";
import SkillTile from "./SkillTile";

const Skills = () => {
	return (
		<div id="skills-section" className="text-white h-screen md:mb-[600px] text-center">
			<h1 className="text-3xl text-grey mb-24 md:mb-36">S K I L L S</h1>
				<ul className="flex flex-wrap w-[450px] md:w-[850px] mx-auto">
					{SkillData.map(value => {
						return (
							<SkillTile {...value}/>
						)
					})}
				</ul>
		</div>
	)
}
export default Skills;