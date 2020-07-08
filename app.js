const yargs = require('yargs')
const notes = require('./notes')
const { describe, demandOption ,argv} = require('yargs')

//Command For Adding Notes
yargs.command({
    command:'add',
    describe:'Add Notes',
    builder:{
        title:{
            describe:'Notes Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Notes Body',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(){
        notes.addNote(argv.title,argv.body)
    }
})


//Command for removing Notes

yargs.command({
    command:'remove',
    describe:'Remove an existing notes',
    builder:{
        title:{
            demandOption:true,
            type:'string',
            describe:'notes title'
        }
    },
    handler:function(){
        notes.removeNote(argv.title)
    }
})

//command for listing notes
yargs.command({
    command:'list',
    describe:'list an existing notes',
    builder:{
        title:{
            demandOption:true,
            type:'string',
            describe:'notes title'
        }
    },
    handler:function(){
        notes.listNotes(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()


