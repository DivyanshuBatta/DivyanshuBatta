// If user adds a note, add it to the LocalStorage
showNotes()
let addBtn = document.getElementById('submit');
addBtn.addEventListener("click", function(e){
    let input = document.getElementById('input');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
     }
     notesObj.push(input.value)
     localStorage.setItem('notes', JSON.stringify(notesObj));
     input.value = '';
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
let input = document.getElementById("input");
input.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.key === "Enter") {
    document.getElementById("submit").click();
  }
});
//Function to show notes.
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
     }
     let html = "";
     notesObj.forEach(function(element, index) {
        html+= `
        <div class="NotesClass" id="notes${index+1}" onclick="showNoteContent();">
        <h2 id="note_heading">Note ${index + 1}</h2>
        <p id="note-para">${element}</p>
        <button id="${index + 1}" onclick="deleteNote(this.id);">Delete Note</button>
      </div> `; 
    });
    let notesElm = document.getElementById('note-container');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `You haven't added any notes yet`;
    }

}
// Function to delete note
function deleteNote(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
     }
     notesObj.splice(index - 1, 1);
     localStorage.setItem("notes", JSON.stringify(notesObj))
     showNotes();
}
//Function to search a Note
let search = document.getElementById('text-search');
search.addEventListener('input',function() {
    let inputVal = search.value.toLowerCase();
    let noteCard = document.getElementsByClassName('NotesClass');
    Array.from(noteCard).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)) {
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