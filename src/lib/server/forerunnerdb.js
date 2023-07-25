// @ts-nocheck
import { Fdb } from '$lib/server/fdb-class.js';

export function cockTailsDb() {
	
  let mixersDb = new Fdb('Cocktails', 'src/lib/server/dbData', 'mixers', 'name', true);
	console.log(`$lib/server/fdb-class.js:Data file ${mixersDb.datafile} loaded into collection ${mixersDb.collection}`)
  
  return {
		name: 'CockTails',
		mixers: mixersDb,
		
	};
}


export let mixersDb = cockTailsDb().mixers;