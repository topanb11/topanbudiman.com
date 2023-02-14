import { SkillData } from "../data";
import SkillTile from "./SkillTile";

const Skills = () => {
	return (
		<div id="skills-section" className="text-white min-h-screen h-fit overflow-hidden text-center pb-24 bg-dark">
			<h1 className="text-3xl text-grey mb-10">S K I L L S</h1>
				<ul className="flex flex-wrap md:w-[850px] mx-auto justify-center">
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