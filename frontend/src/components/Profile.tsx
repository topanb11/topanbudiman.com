import TypewriterComponent from "typewriter-effect";
import headshot from "../assets/headshot.jpg";
import { WebLinks } from "../interfaces/weblinks"

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
		const y = element.getBoundingClientRect().top + window.pageYOffset - 20;
		window.scrollTo({top: y, behavior: "smooth"});
	}
}

let DESKTOP_CONTAINER = "md:border-2 md:border-grey md:h-[750px] md:w-[750px] md:rounded-full md:space-y-0 md:mx-auto"

const Profile = () => {
	return (
		<div className="h-screen bg-dark">
			<div className={`bg-dark text-white flex flex-col items-center space-y-6 ${DESKTOP_CONTAINER}`}>
				<div className="border-[1px] border-grey w-[320px] rounded-full md:border-none md:mt-52">
					<img className="rounded-full p-20 md:p-5" src={headshot}/>
				</div>
				<div className="flex flex-row space-x-10 text-grey text-[1.1rem] md:text-lg md:h-10">
					<h1 className="mb-2 md:mb-6">S O F T W A R E</h1><h1>E N G I N E E R</h1>
				</div>
				<div className="text-2xl md:text-4xl font-bold md:h-6">
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
								className="text-sm md:text-lg mt-4 md:mt-8 text-grey hover:cursor-pointer hover:text-dark hover:bg-white rounded-md px-1 md:px-4 ease-in duration-300"
								key={data.title}
								onClick={() => {ScrollTo(data.id)}}
							>
								{data.title}
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
export default Profile;