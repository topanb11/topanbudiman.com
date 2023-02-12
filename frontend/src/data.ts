import { ExperienceCard } from "./interfaces/experience";
import { SkillsCard } from "./interfaces/skills";
import VenaLogo from "./assets/companies/VenaLogo.png";
import OvintivLogo from "./assets/companies/OvintivLogo.png";
import CtcLogo from "./assets/companies/CtcLogo.png";
import Cpp from "./assets/technologies/C++.png";
import CSS from "./assets/technologies/CSS.png";
import FastAPI from "./assets/technologies/FastAPI.svg";
import HTML from "./assets/technologies/HTML.png";
import Java from "./assets/technologies/Java.png";
import JavaSpring from "./assets/technologies/JavaSpring.svg";
import JS from "./assets/technologies/JS.png";
import MUI from "./assets/technologies/MUI.png";
import MySQL from "./assets/technologies/MySQL.png";
import NextJS from "./assets/technologies/NextJS.svg";
import NodeJS from "./assets/technologies/NodeJS.png";
import OracleDB from "./assets/technologies/OracleDB.png";
import PostgreSQL from "./assets/technologies/PostgreSQL.png";
import Python from "./assets/technologies/Python.png";
import React from "./assets/technologies/React.png";
import Tailwind from "./assets/technologies/Tailwind.png";
import TS from "./assets/technologies/TS.png";

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

export const SkillData: SkillsCard[] = [
	{
		level: "85",
		image: Python
	},
	{
		level: "85",
		image: JS
	},
	{
		level: "70",
		image: TS
	},
	{
		level: "90",
		image: Java
	},
	{
		level: "75",
		image: Cpp
	},
	{
		level: "95",
		image: HTML
	},
	{
		level: "85",
		image: CSS
	},
	{
		level: "95",
		image: React
	},
	{
		level: "80",
		image: NodeJS
	},
	{
		level: "80",
		image: NextJS
	},
	{
		level: "85",
		image: JavaSpring
	},
	{
		level: "95",
		image: Tailwind
	},
	{
		level: "90",
		image: MUI
	},
	{
		level: "90",
		image: FastAPI
	},
	{
		level: "80",
		image: PostgreSQL
	},
	{
		level: "80",
		image: OracleDB
	},
	{
		level: "85",
		image: MySQL
	},
]
