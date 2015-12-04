'use strict';

//let model= new NotesModel();

//model.add(note, (err, note) => console.log('Note is added');

// let obj = {
// 	init: function(){
// 		setTimeout(() =>
// 		this.addNote(), 1000);
// 	},
// 	addNote: function(){}
// }

function goFunction() {
	//search();
	let searchTerm = document.getElementById("searchText").value;
	let range = document.body.textContent && document.body.innerText && document.getElementById("content").value;
	//let hasWord = range.indexOf(name)!==-1;
	let amount = 0;

	let lis = document.getElementsByTagName('li');

	for(i=0; i<lis.length; i++){
		let thisLi = lis[i];
		if(hasWord(searchTerm, thisLi)) {
			amount++;
		}
	}

	//display();
	let searchResult = "You are searching for' " + searchTerm + " ' , in total " + amount + " note(s) contain(s) this result.";
	document.getElementById("result").innerHTML = searchResult;
}

function hasWord(searchTerm, element) {
	if(element.innerHTML.indexOf(searchTerm) == -1) {
		return false;
	}
	return true;
}

let i = 0;


function addNoteFunction(){
	let noteTitle = document.createElement("INPUT");
	let noteOpenButton = document.createElement("INPUT");
	let noteDelButton = document.createElement("INPUT");
	let noteSaveButton = document.createElement("INPUT");
	let noteP = document.createElement("P");
	
	//let textNode = document.createTextNode( "This is a paragraph");
	let noteLi = document.createElement("LI");
	noteLi.setAttribute("id", i);
	/*Note Title is a textarea*/
	noteTitle.setAttribute("type", "textarea");
	noteTitle.setAttribute("value", i);
	noteTitle.setAttribute("id", "noteTitle"+i);
	
	/*Note edit button for editing content of the note*/
	noteOpenButton.setAttribute("type", "button");
	noteOpenButton.setAttribute("value", "open");
	noteOpenButton.setAttribute("id", "noteOpenButton"+i);
	noteOpenButton.addEventListener("click", openText);

	/*Note delete button for removing a note from list*/
	noteDelButton.setAttribute("type", "button");
	noteDelButton.setAttribute("value", "delete");
	noteDelButton.setAttribute("id", "noteDelButton"+i);
	noteDelButton.addEventListener("click", deleteSelf);
	
	
	/*Note Save button for saving a noteText*/
	noteSaveButton.setAttribute("type", "button");
	noteSaveButton.setAttribute("value", "save");
	noteSaveButton.setAttribute("id", "noteSaveButton"+i);
	noteSaveButton.addEventListener("click", saveText);

	/*Note Content paragraph*/
    noteP.innerText = "This is a paragraph"+shortDate().toString();
	noteLi.appendChild(noteTitle);
	noteLi.appendChild(noteOpenButton);
	noteLi.appendChild(noteDelButton);
	noteLi.appendChild(noteSaveButton);
	noteLi.appendChild(noteP);

	let noteList = document.getElementById("list");

	noteList.appendChild(noteLi);

	i = i+1;


}

function openText(e) {
	let noteText = e.target.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
	document.getElementById("content").value = noteText;


}

function deleteSelf(e) {
	//delete e.target;
	let parent = e.target.parentElement;
	let parentofParent = parent.parentElement;
	parentofParent.removeChild(parent);
}

function saveText(e) {
// 	let updatedText = document.getElementById("content").value;

	var nn = new Note();
	nn.saveTextNN(e)
// 	e.target.nextElementSibling.innerHTML = updatedText;
}

const today = new Date();
let shortDate = function(){
	return today.getMonth() + '/' + today.getDate() + '/' + today.getFullYear();
}

//addNoteFunction();

console.log(shortDate());

class Note {
	constructor(){

	}
	
	saveTextNN(event){
		let updatedText = document.getElementById("content").value;
		event.target.nextElementSibling.innerHTML = updatedText;
	}

}