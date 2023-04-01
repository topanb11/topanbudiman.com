import * as contentful from 'contentful';

export interface Resume {
	assets: contentful.Asset;
	contentTypeId: 'resume'
};