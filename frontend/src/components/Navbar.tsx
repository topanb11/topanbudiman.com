import { motion } from "framer-motion";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import resume from "../assets/TopanBudiman_Resume.pdf"

const ICONS: Object = {
	fontSize: 35,
	color: "#F7F7F7"
}

const Navbar = () => {
	return (
			<div className="bg-dark">
				<motion.div 
					initial={{x: -500}}
					animate={{x: 0}}
					transition={{x: {type: "spring" , duration: 1}}}
					className="bg-dark text-white h-18 flex flex-row items-center space-x-3 pl-4 py-8"
				>
					<a href="https://www.linkedin.com/in/topanb/" target="_blank">
						<LinkedInIcon sx={ICONS}/>
					</a>
					<a href="https://www.linkedin.com/in/topanb/" target="_blank">
						<GitHubIcon sx={ICONS} />
					</a>
					<a href={resume} target="_blank">
						<DescriptionIcon sx={ICONS} />
					</a>
				</motion.div>
			</div>
	)
}
export default Navbar;