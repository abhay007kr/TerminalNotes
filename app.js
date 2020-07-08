const yargs = require('yargs')
const notes = require('./notes')
const { describe, demandOption ,argv} = require('yargs')

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

yargs.parse()