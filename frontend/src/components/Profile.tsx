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
		element.scrollIntoView({behavior: "smooth"});
	}
}

const Profile = () => {
	return (
		<div className="bg-dark text-white h-screen flex flex-col items-center space-y-9">
			<div className="border-[1px] border-grey w-[390px] rounded-full text-center">
				<img className="rounded-full p-20" src={headshot}/>
			</div>
			<div className="flex flex-row space-x-10 text-[1.7rem]">
				<h1>S O F T W A R E</h1><h1>E N G I N E E R</h1>
			</div>
			<div className="text-3xl font-bold">
				<TypewriterComponent
					options={{
						strings: StringList,
						autoStart: true,
						loop: true,
						delay: 80
					}}
				/>
			</div>
			<ul className="flex space-x-6">
				{Links.map(data => {
					return (
						<li 
							className="hover:cursor-pointer hover:text-dark hover:bg-white rounded-md px-2 ease-in duration-300"
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