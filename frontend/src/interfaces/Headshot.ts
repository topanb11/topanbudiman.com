import * as contentful from 'contentful'

export interface Headshot {
	contentTypeId: 'headshot'
	imageUrl: contentful.Asset
}