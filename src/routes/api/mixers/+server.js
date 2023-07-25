import { mixersDb} from "$lib/server/forerunnerdb";
import { io } from "$lib/webSocketConnection";
import { json } from "@sveltejs/kit";

let mixersColl = mixersDb.getCollection();


/** @type {import('./$types').RequestHandler} */
export async function GET() {
	return json(mixersDb.getData());
}


export const POST = async ({ request }) => {
    const body = await request.json();
    //console.log(body)
    //const allMixers  = body;
   mixersColl.insert(body)
   mixersDb.saveData();

   io.send("mixer-update")
    return json("Done", { status: 200 });
}
