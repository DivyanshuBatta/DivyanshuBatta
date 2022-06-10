// If user adds a note, add it to the LocalStorage
showNotes()
let addBtn = document.getElementById('submit');
addBtn.addEventListener("click", function(e){
    let input = document.getElementById('input');
    let input_heading = document.getElementById('input-heading');
    let notes = localStorage.getItem('notes');
    let noteheadingstorage = localStorage.getItem('notes-heading');
    if (notes == null || noteheadingstorage == null) {
        notesObj = [];
        notesHeadingObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        notesHeadingObj = JSON.parse(noteheadingstorage);
     }
     notesObj.push(input.value);
     notesHeadingObj.push(input_heading.value);
     localStorage.setItem('notes', JSON.stringify(notesObj));
     localStorage.setItem('notes-heading', JSON.stringify(notesHeadingObj));
     input.value = '';
     input_heading.value = '';
    showNotes()
    let noteMain = document.getElementById('note_Entry');
    let notecontainer = document.getElementById('note-container');
    let addBtn = document.getElementById('add');
    let h1 = document.getElementById('h1');
    notecontainer.style.display = 'flex';
    noteMain.style.display = 'none';
    addBtn.style.display = 'block';
    let yournote = document.getElementById('your-note');
    yournote.style.display = 'block';
    h1.innerText = 'Welcome to NOTES';
})
//Function to create note by clicking the enter button.
// let input = document.getElementById("input");
// input.addEventListener("keyup", function (event) {
//   event.preventDefault();
//   if (event.key === "Enter") {
//     document.getElementById("submit").click();
//   }
// });
//Function to show notes.
function showNotes() {
    let notes = localStorage.getItem('notes');
    let noteheadingstorage = localStorage.getItem('notes-heading');
    if (notes == null || noteheadingstorage == null) {
        notesObj = [];
        notesHeadingObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        notesHeadingObj = JSON.parse(noteheadingstorage);
     }
     let html = "";
     notesObj.forEach(function(element) {
        notesHeadingObj.forEach(function(element1,index) {
            
        html+= `<div class="NotesClass" id="notes">
         <h2 id="note_heading">${index + 1}. ${element1}</h2>
         <p id="note-para">${element}</p>
         <button id="${index + 1}" onclick="deleteNote(this.id)">Delete Note</button>
       </div> `;
    })
    });
    let notesElm = document.getElementById('note-container');
    if (notesObj.length != 0 && notesHeadingObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `You haven't added any notes yet`;
    }

}
// Function to delete note
function deleteNote(index) {
    let notes = localStorage.getItem('notes');
    let notesheadingstorage = localStorage.getItem('notes-heading');
    if (notes == null || notesheadingstorage == null) {
        notesObj = [];
        notesHeadingObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        notesHeadingObj = JSON.parse(notesheadingstorage);
     }
     notesHeadingObj.splice(index - 1, 1);
     notesObj.splice(index - 1, 1);

    //  notesHeadingObj.splice(index - 1, 1);
     localStorage.setItem("notes", JSON.stringify(notesObj))
     localStorage.setItem("notes-heading", JSON.stringify(notesHeadingObj))
     showNotes();
}
//Function to search a Note
let search = document.getElementById('text-search');
search.addEventListener('input',function() {
    let inputVal = search.value.toLowerCase();
    let noteCard = document.getElementsByClassName('NotesClass');
    Array.from(noteCard).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        let cardHeadingTxt = element.getElementsByTagName("h2")[0].innerText;
        if(cardTxt.includes(inputVal) || cardHeadingTxt.includes(inputVal)) {
            element.style.display = "flex";
        }
        else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})
function showAddNote() {
    let noteMain = document.getElementById('note_Entry');
    let notecontainer = document.getElementById('note-container');
    let addBtn = document.getElementById('add');
    let h1 = document.getElementById('h1');
    h1.innerText = 'Add a Note';
    noteMain.style.display = 'flex';
    notecontainer.style.display = 'none';
        addBtn.style.display = 'none';
        let yournote = document.getElementById('your-note');
    yournote.style.display = 'none';
}
// let note1 = document.getElementById("notes");
// note1.addEventListener("hover",function(){
//     note1.classList.toggle("NotesClassJS");
//     let para1 = document.getElementById("note-para");
//     para1.classList.toggle('NotesClassParaJS');
//     let heading1 = document.getElementById("note_heading");
//     heading1.classList.toggle("NoteClassHeadingJS");
// })