import * as contentful from 'contentful'

export interface ExperienceCard {
	company: string
	date: string
	experience: string
	headshot: contentful.Asset
	location: string
	order: number
}
