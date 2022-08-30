import { error } from '@sveltejs/kit'

export const load = async () => {
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


// import { redirect } from '@sveltejs/kit';
//
// export async function load() {
// 	throw redirect(302, "/work");
// }
