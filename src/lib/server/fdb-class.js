import ForerunnerDB from 'forerunnerdb';
import fs from 'fs';

export class Fdb {
	/**
	 * @param {string} dbName
	 * @param {string} dataDir
	 * @param {string} collection
	 */
	constructor(dbName, dataDir, collection, primaryKey = '', loadData = false) {
		this.dataDir = dataDir;
		this.primaryKey = primaryKey;
    this.collection = collection;
		this.datafile = this.dataDir + '/' + collection + '.json';
		var fdb = new ForerunnerDB();
		let playerDb = fdb.db(dbName);
		this.dbcollection = playerDb.collection(collection, {
			autoCreate: true,
			primaryKey: primaryKey
		});
		if (loadData) this.loadData();
	}

	loadData() {
		let data = fs.readFileSync(this.datafile, {
			encoding: 'utf8',
			flag: 'r'
		});
		let d = JSON.parse(data);
		//this.dbcollection.insert(d);
		d.forEach((/** @type {any} */ element) => {
			this.dbcollection.insert(element);
		});
	}
	async saveData() {
		let allrecords = this.dbcollection.find({});
		try {
			fs.writeFileSync(this.datafile, JSON.stringify(allrecords, null, 2), {
				flag: 'w'
			});
		} catch (error) {
			console.log(error);
		}
	}
	getData() {
		return this.dbcollection.find({});
	}
	getCollection() {
		return this.dbcollection;
	}
}
