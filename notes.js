const fs = require('fs')
const { loadNote } = require('../Notes/notes')

//Add a note
const addNote = function(title,body){
    const notes = loadNotes() //First load a note
    console.log(notes)
}

//To check if the file named "notes.json" exists 
function loadNote(){
    try{
        const dataBuffer = fs.readFileSync('notes.json') 
    const dataJson = JSON.stringify(dataBuffer) //Convert Buffered data into string
    return JSON.parse(dataJson)
    }catch(e){
        return []
    }
    
}