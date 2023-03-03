import { error } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit';

export const load = async () => {

	throw redirect(302, '/work');

	try {
		const ReadMeFile = await import('../../README.md');
		const ReadMe = ReadMeFile.default.render().html

		return {
			ReadMe
		}
	}
	catch(err) {
		throw error(500, err)
	}
}

