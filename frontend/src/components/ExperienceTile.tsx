import { ExperienceCard } from "../interfaces/experience";
import { motion } from "framer-motion";

const ExperienceTile = ({order, company, title, location, duration, image }: ExperienceCard) => {

	const EXPERIENCE_DETAILS = "italic text-grey md:text-lg"

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			transition={{ duration: 0.8}}
			variants={{
			visible: { x: 0, opacity: 1},
			hidden: { x: order % 2 == 0 ? 100 : -100, opacity: 0.5 }
			}}
		>
			<li key={order} className="flex flex-row justify-around items-center py-8 px-3">
				<img src={image} className="w-24 h-24 md:w-48 md:h-48 rounded-sm"/>
				<div className="text-white text-right w-80 md:w-96 border-r-2 border-grey pr-4 h-fit md:space-y-2">
					<h3 className="font-extrabold text-xl md:text-3xl">{company}</h3>
					<h3 className="text-xl">{title}</h3>
					<h3 className={EXPERIENCE_DETAILS}>{duration}</h3>
					<h3 className={EXPERIENCE_DETAILS}>{location}</h3>
				</div>
			</li>
		</motion.div>
	)
}
export default ExperienceTile;