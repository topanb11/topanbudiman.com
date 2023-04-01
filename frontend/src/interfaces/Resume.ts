import * as contentful from 'contentful';

export interface Resume {
	contentTypeId: 'resume'
	assets: contentful.Asset
};