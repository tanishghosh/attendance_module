var fs = require('fs');
var csv = require('fast-csv');
var admin = require('firebase-admin');
var ad = require('firebase-tools')
//var a = require('firebase')

var serviceAccount = require("JSON_FILE_PATH");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "DATABASE_URL"
});
var db = admin.database();
var ref = db.ref();

var rootRef = ref.child("list");
var temp=1;
fs.createReadStream('FILENAME.csv')
	.pipe(csv())
	.on('data',function(data){
		console.log(data);
		var count=0
		rootRef.child(data[0]).set({
    					"Reg": data[0],
						"Name":	data[1],
						"count":count
						});
		
		
		//console.log(data[0]);
		})
		.on('end',function(data){
			console.log('Read finished');
			});
			




