const yargs = require('yargs')
const notes = require('./notes')
const { describe, demandOption ,argv} = require('yargs')
// const { argv } = require('process')

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
        console.log("Title :" + argv.title)
        console.log("Body :" + argv.body)
    }
})

yargs.parse()