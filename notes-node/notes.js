console.log('Starting notes.js');

const fs = require('fs');
const jfile = 'notes-data.json';

var fetchNotes = () => {
	try {
		notesString = fs.readFileSync(jfile);
		return JSON.parse(notesString);
	} catch(e){
		return [];
	}

};

var saveNotes = (notes) => {
	fs.writeFileSync(jfile,JSON.stringify(notes));
};

var addNote = (title,body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	}
	var checkDuplicate = notes.filter( (note) => {
		return note.title === title;
	});

	if (checkDuplicate.length === 0){
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};



var getAll = () =>{
	return fetchNotes();
};


var getNote = (title) =>{
	var notes = fetchNotes();
	var returnNote;
	var returnNotes = notes.filter( (note) => {
		 return note.title === title;
	});
	return returnNotes[0];
};


var logNote = (note) => {
	console.log('--');
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
	console.log('--');

};

var removeNote = (title) =>{
	var notes = fetchNotes();
	var newNotes = notes.filter((note) => {
		return note.title !== title;
	});
	saveNotes(newNotes);
	return newNotes.length !== notes.length;
};



module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote
};
