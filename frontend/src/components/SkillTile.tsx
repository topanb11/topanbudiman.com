import { useState } from "react";
import { SkillsCard } from "../interfaces/skills";
import { motion } from "framer-motion";

const SKILL_LEVEL = "text-dark flex opacity-0 hover:opacity-100 ease-in duration-300 hover:bg-white absolute items-center inset-0 rounded-full cursor-pointer justify-center font-bold text-3xl md:text-5xl"

const SkillTile = ({level, image, order}: SkillsCard) => {
	const imageUrl: string = image.fields.file.url;

	return (
		<motion.div
		initial="hidden"
		whileInView="visible"
		transition={{ duration: order * 0.05 }}
		variants={{
		visible: { opacity: 1},
		hidden: { opacity: 0.25 }
		}}
	>
		<li key={imageUrl} className="w-24 h-24 md:w-48 md:h-48 p-6 md:p-12 border-2 border-white rounded-full m-2 md:m-2 relative items-center">
			<div className={SKILL_LEVEL}>
				{level}%
			</div>
			<img src={imageUrl} className="z-0"/>
		</li>
	</motion.div>
	)
}
export default SkillTile;