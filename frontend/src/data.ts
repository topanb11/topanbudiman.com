import { ExperienceCard } from "./interfaces/experience";
import VenaLogo from "./assets/companies/VenaLogo.png";
import OvintivLogo from "./assets/companies/OvintivLogo.png";
import CtcLogo from "./assets/companies/CtcLogo.png";

export const ExperienceData: ExperienceCard[] = [
	{
		order: 1,
		company: "Vena Solutions",
		image: VenaLogo,
		title: "Incoming Software Developer Intern",
		duration: "May. 2023 - May. 2024",
		location: "Toronto, ON"
	},
	{
		order: 2,
		company: "Ovintiv",
		image: OvintivLogo,
		title: "Software Developer Intern",
		duration: "May. 2022 - Aug. 2022",
		location: "Calgary, AB"
	},
	{
		order: 3,
		company: "Code the Change YYC",
		image: CtcLogo,
		title: "Co President",
		duration: "March. 2022 - Present",
		location: "Calgary, AB"
	},
]