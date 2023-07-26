import { mixersDb } from '$lib/server/forerunnerdb';
import { json } from '@sveltejs/kit';

let mixersColl = mixersDb.getCollection();

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	return json(mixersDb.getData());
}

export const POST = async ({ request }) => {
	const body = await request.json();
	mixersColl.insert(body);
	mixersDb.saveData();
	return json('Done', { status: 200 });
};
