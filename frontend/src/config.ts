export default {
	build: {
		envPrefix: 'VITE_',
	}
}

export const contentfulApiKey: string = import.meta.env.VITE_CONTENTFUL_API_KEY;
