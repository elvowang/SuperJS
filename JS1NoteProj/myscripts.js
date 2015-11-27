function goFunction() {
	//search();
	var searchTerm = document.getElementById("searchText").value;
	var range = document.body.textContent && document.body.innerText && document.getElementById("content").value;
	//var hasWord = range.indexOf(name)!==-1;
	var amount = 0;

	var lis = document.getElementsByTagName('li');

	for(i=0; i<lis.length; i++){
		var thisLi = lis[i];
		if(hasWord(searchTerm, thisLi)) {
			amount++;
		}
	}

	//display();
	var searchResult = "You are searching for' " + searchTerm + " ' , in total " + amount + " note(s) contain(s) this result.";
	document.getElementById("result").innerHTML = searchResult;
}

function hasWord(searchTerm, element) {
	if(element.innerHTML.indexOf(searchTerm) == -1) {
		return false;
	}
	return true;
}

var i = 0;
function addNoteFunction(){
	var noteTitle = document.createElement("INPUT");
	var noteOpenButton = document.createElement("INPUT");
	var noteDelButton = document.createElement("INPUT");
	var noteSaveButton = document.createElement("INPUT");
	var noteP = document.createElement("P");
	
	//var textNode = document.createTextNode( "This is a paragraph");
	var noteLi = document.createElement("LI");
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
    noteP.innerText = "This is a paragraph"+new Date().toString();
	noteLi.appendChild(noteTitle);
	noteLi.appendChild(noteOpenButton);
	noteLi.appendChild(noteDelButton);
	noteLi.appendChild(noteSaveButton);
	noteLi.appendChild(noteP);

	var noteList = document.getElementById("list");

	noteList.appendChild(noteLi);

	i = i+1;


}

function openText(e) {
	var noteText = e.target.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
	document.getElementById("content").value = noteText;


}

function deleteSelf(e) {
	//delete e.target;
	var parent = e.target.parentElement;
	var parentofParent = parent.parentElement;
	parentofParent.removeChild(parent);
}

function saveText(e) {
	var updatedText = document.getElementById("content").value;
	e.target.nextElementSibling.innerHTML = updatedText;
}

	
