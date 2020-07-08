const fs = require('fs')
const chalk = require('chalk')
const { loadNote } = require('../Notes/notes')

//Add a note
const addNote = function(title,body){
    const notes = loadNotes() //First load a note
    console.log(notes)
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push(
            {
                title:title,
                body:body
            }
        )
    
        saveNotes(notes)
    }
    else{
        console.log("Title already taken")
    }
    notes.push(
        {
            title:title,
            body:body
        }
    )

    saveNotes(notes)
}

//To save the notes in a file
const saveNotes = function(notes){
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}

//To check if the file named "notes.json" exists 
function loadNotes(){
    try{
        const dataBuffer = fs.readFileSync('notes.json') 
    const dataJson = dataBuffer.toString //Convert Buffered data into string
    return JSON.parse(dataJson)
    }catch(e){
        return []
    }
}



//Remove a Note

const removeNote = function(title){
        const notes = loadNotes()
        const notesToKeep = notes.filter(function(note){
            return note.title !== title
        })

        if(notes.length>notesToKeep.length){
            console.log(chalk.green.inverse('Note Removed'))
            saveNotes(notesToKeep)
        }else{
            console.log(chalk.red.inverse('No note found'))
        }
        saveNotes(notesToKeep)
}



//List Notes

const listNote = function(title){
    console.log("title :" + title)
}
module.exports={
    addNote:addNote,
    removeNote:removeNote,
    listNote:listNote
}