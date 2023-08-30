import * as contentful from 'contentful';
import { contentfulApiKey } from './config';

const client = contentful.createClient({
	space: 'hhsz6oryfyzv',
	accessToken: contentfulApiKey,
});
export default client;
