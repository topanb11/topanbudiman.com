import { SocialIcon } from "react-social-icons";

const Navbar = () => {
	return (
		<header>
			<div className="bg-dark text-white h-18 flex flex-row items-center space-x-5 pl-4 py-4 ">
				<SocialIcon url="https://www.linkedin.com/in/topanb/" bgColor="#757083"/>
				<SocialIcon url="https://github.com/topanb11" bgColor="#757083"/>
			</div>
		</header>
	)
}
export default Navbar;