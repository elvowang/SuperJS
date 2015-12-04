'use strict';

class Notes {
    contructor(){
        let notes = [];
        note = {
            noteId : i => {
                i = notes.length-1;
            }
         };
         
    }

    createNote(note) {
        var promise = new Promise(function(resolve, reject) {

            if(i==0) {
                resolve(note);
            }
            else {
                reject(Error("Cannot create a note"));
            }
        });
    console.log("llala"+note);
    }

//     deleteNote(noteId) {
//         var promise = new Promise(function(resolve, reject) {
//             var filtered = notes.filter(isKept);

//             function isKept(){
            	
//             }
//         })
//     }
}
