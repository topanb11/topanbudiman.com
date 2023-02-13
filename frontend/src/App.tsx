import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

const App = () => {
  return (
		<div className="bg-dark">
			<Navbar/>
			<Profile/>
			<About/>
			<Experience/>
			<Skills/>
			<Projects/>
		</div>
  )
}

export default App
