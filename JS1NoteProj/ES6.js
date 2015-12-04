// class Note{
//     constructor(title, content){
//         this.title = title;
//         this.content = content;
//     }

//     addNote(){
//         return title;
//     }

//     deleteNote(){
//         //delete
//     }

//     openNote(){
//         document.getElementById("content").value = noteText;
//     }
// }

// let noteNew = new Note('NoteTitle', 'NoteContent');
// console.log(noteNew.addNote());
'use strict';

// class Circle{
//     constructor(x,y){
//         this.x= x;
//         this.y= y;
//     }
// }


// var printOut = new Circle(1,2);
// console.log(printOut.x);


class Notes {
    constructor(noteId, noteTitle){
        this.noteId = noteId;
        this.noteTitle = noteTitle;
    }

    addNote(){
        return 'added' +this.noteId;
    }
}

class Note extends Notes{
    constructor(noteId, noteTitle, noteContent) {
        super(noteId, noteTitle);
        this.noteContent = noteContent;
    }

    addNote(){
        return super.addNote()+'content is : ' + this.noteContent;
    }
}

// console.log(new Note(0, 'Title0', 'Content0').addNote());


// class NotesModel{
//     add(note){
//         XXXX;
//         console.log('suc');
//     }

//     add(note){
//         xxx
//     }

//     showlog(){
//         console.log('suc')
//     }
// }

var Promise = function () {
  this.state = 'pending';


}



Promise.prototype.addNote = function(nn){
    this.nn = nn;
    this.then();
}

Promise.prototype.then = function(){
  console.log('Suc2');  
}

module.exports = Promise;