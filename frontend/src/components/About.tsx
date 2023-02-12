import about from "../assets/about.jpg";
import { motion } from "framer-motion";

const DESKTOP_VIEW = "md:flex-row md:space-x-12"

const About = () => {
	return (
		<div id="about-section" className="h-screen md:mb-[600px]">
			<h1 className="text-3xl text-grey text-center mb-24 md:mb-36">A B O U T</h1>
			<div 
				className={`flex flex-col space-y-6 text-white items-center justify-center ${DESKTOP_VIEW}`}
			>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.75 }}
					variants={{
					visible: { x: 0, opacity: 1},
					hidden: { x: -100, opacity: 0.5 }
				}}
				>
					<img className="rounded-lg w-80 md:w-[500px]" src={about}/>
				</motion.div>
				<div className="text-center md:text-left">
					<h2 className="mb-5 font-semibold text-xl md:text-3xl">Here is a <span className="underline">little</span> background</h2>
					<p className="w-96 md:w-[700px] text-justify md:text-xl">
						I'm Topan! I am currently in my third year of Software Engineering at
						the University of Calgary. My current interest at the moment is full-stack
						development which is reflected by my projects and work experience! You can
						catch me interning at Vena Solutions this upcoming May 2023. Along with that
						I am also seeking internships for Summer 2024! In my freetime I also enjoy learning 
						new things 💻 working out 💪 and taking pics 📸
					</p>
				</div>
			</div>
		</div>
	)
}
export default About;