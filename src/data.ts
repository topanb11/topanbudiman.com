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
		order: 1,
		level: "85",
		image: Python
	},
	{
		order: 2,
		level: "85",
		image: JS
	},
	{
		order: 3,
		level: "70",
		image: TS
	},
	{
		order: 4,
		level: "90",
		image: Java
	},
	{
		order: 5,
		level: "75",
		image: Cpp
	},
	{
		order: 6,
		level: "95",
		image: HTML
	},
	{
		order: 7,
		level: "85",
		image: CSS
	},
	{
		order: 8,
		level: "95",
		image: React
	},
	{
		order: 9,
		level: "80",
		image: NodeJS
	},
	{
		order: 10,
		level: "80",
		image: NextJS
	},
	{
		order: 11,
		level: "85",
		image: JavaSpring
	},
	{
		order: 12,
		level: "95",
		image: Tailwind
	},
	{
		order: 13,
		level: "90",
		image: MUI
	},
	{
		order: 14,
		level: "90",
		image: FastAPI
	},
	{
		order: 15,
		level: "80",
		image: PostgreSQL
	},
	{
		order: 16,
		level: "80",
		image: OracleDB
	},
	{
		order: 17,
		level: "85",
		image: MySQL
	},
]
