const fs = require('fs');

class ESDocNamedImportPlugin {

	onHandleConfig(ev) {
		this._config = ev.data.config;
	}

	onHandleDocs(ev) {
		const packagePath = this._config.package || './package.json';

		let packageName = '';

		try {
			const
				packageJSON = fs.readFileSync(packagePath).toString(),
				packageObj = JSON.parse(packageJSON);

			packageName = packageObj.name;
		}
		catch(e) {
			return console.warn('package.json missing');
		}

		for(const doc of ev.data.docs) {
			if(!doc.importPath) {
				continue;
			}

			doc.importStyle = `{${doc.importStyle}}`;
			doc.importPath = packageName;
		}
	}
}

module.exports = new ESDocNamedImportPlugin();
