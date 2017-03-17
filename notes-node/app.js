console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions =  { describe: 'Title of Note', demand: true, alias: 't'};
const bodyOptions =   { describe: 'Body of Note', demand: true, alias: 'b'}; 

const argv = yargs
.command('add','Add a new note', {
    title: titleOptions,
	body: bodyOptions
})
.command('list','List all notes')
.command('read','Read a note',{
	title: titleOptions
	})
.command('remove','Remove a note',{
	title: titleOptions
	})
.help()
.argv;


var command = argv._[0];


// console.log('Yargs: ',argv);



if (command === 'add'){
	var note = notes.addNote(argv.title,argv.body);
	if (note){
		console.log('Note was added');
		notes.logNote(note);
	} else {
		console.log('A note already exists with title: ', argv.title);
	}
} else if ( command === 'list' ){
	var allNotes = notes.getAll();
	if (allNotes){
		console.log('All Notes');
		for( var i=0; i < allNotes.length; i++){
			notes.logNote(allNotes[i]);
		}
	} else {
		console.log('No notes in the file');
	}
		
} else if ( command === 'read' ){
	var note = notes.getNote(argv.title);
	if (note){
		notes.logNote(note);
	} else {
		console.log('note not found: ', argv.title);
	}
} else if ( command === 'remove' ){
	var results = notes.removeNote(argv.title);
	var message = results ? `note ${argv.title} was removed` : 'record not found';
	console.log(message);
} else {
	console.log('command not found');
}



