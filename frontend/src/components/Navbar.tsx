import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Navbar = () => {
	return (
			<motion.div 
				initial={{x: -500}}
				animate={{x: 0}}
				transition={{x: {type: "spring" , duration: 1}}}
				className="bg-dark text-white h-18 flex flex-row items-center space-x-5 pl-4 py-8"
			>
				<SocialIcon url="https://www.linkedin.com/in/topanb/" bgColor="#757083"/>
				<SocialIcon url="https://github.com/topanb11" bgColor="#757083"/>
			</motion.div>
	)
}
export default Navbar;