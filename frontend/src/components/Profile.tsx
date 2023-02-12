import TypewriterComponent from "typewriter-effect";
import headshot from "../assets/headshot.jpg";
import { WebLinks } from "../interfaces/experience"

const StringList: string[] = [
	"Hi, my name is Topan!",
	"3rd Year SWE @ UCalgary",
	"oh yeaaaaaaa"
]

const Links: WebLinks[] = [
	{title: "ABOUT", id: "about-section"},
	{title: "EXPERIENCE", id: "experience-section"},
	{title: "SKILLS", id: "skills-section"},
	{title: "PROJECTS", id: "projects-section"},
]

const ScrollTo = (id: string) => {
	const element = document.getElementById(id);
	if (element) {
		// element.scrollIntoView({behavior: "smooth"});
		const y = element.getBoundingClientRect().top + window.pageYOffset - 20;
		window.scrollTo({top: y, behavior: "smooth"});
	}
}

let DESKTOP_CONTAINER = "md:border-2 md:border-grey md:h-[850px] md:w-[850px] md:rounded-full md:space-y-1 md:mx-auto md:mb-[600px]"

const Profile = () => {
	return (
		<div className={`bg-dark text-white h-screen flex flex-col items-center space-y-6 ${DESKTOP_CONTAINER}`}>
			<div className="border-[1px] border-grey w-[360px] rounded-full md:border-none md:mt-52">
				<img className="rounded-full p-20 md:p-5" src={headshot}/>
			</div>
			<div className="flex flex-row space-x-10 text-grey text-[1.1rem] md:text-[1.5rem]">
				<h1 className="mb-2 md:mb-6">S O F T W A R E</h1><h1>E N G I N E E R</h1>
			</div>
			<div className="text-3xl md:text-5xl font-bold">
				<TypewriterComponent
					options={{
						strings: StringList,
						autoStart: true,
						loop: true,
						delay: 80
					}}
				/>
			</div>
			<ul className="flex space-x-4">
				{Links.map(data => {
					return (
						<li 
							className="mt-4 md:mt-8 p-1 text-lg text-grey hover:cursor-pointer hover:text-dark hover:bg-white rounded-md px-1 md:px-4 ease-in duration-300"
							key={data.title}
							onClick={() => {ScrollTo(data.id)}}
						>
							{data.title}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
export default Profile;