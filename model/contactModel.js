const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({

    // New Project Schema

    pName : {
        type : String,
        trim : true,
        required:false,
        set: a => a === '' ? undefined : a
    },
    pCompanyName : {
        type : String,
        trim : true,
        required:false,
        set: b => b === '' ? undefined : b
    },
    pWebsite : {
        type : String,
        required:false,
        set: c => c === '' ? undefined : c
    },
    pDesiginition : {
        type : String,
        trim : true,
        required:false,
        set: d => d === '' ? undefined : d
    },
    pEmailAddress : {
        type: String,
        trim: true,
        lowercase: true,
        required:false,
        set: e => e === '' ? undefined : e
    },
    pLocation : {
        type : String,
        trim : true,
        required:false,
        set: f => f === '' ? undefined : f
    },
    pEstimatedBudget :{
       type:Number,
       required:false,
       set: g => g === '' ? undefined : g
    } ,
    pPhone :{
      type:Number,
      required:false,
      set: h => h === '' ? undefined : h
    } ,
    pMessage : {
        type : String,
        trim : true,
        required:false,
        set: i => i === '' ? undefined : i
    },

    // Consulting Schema

    cName : {
        type : String,
        trim : true,
        required:false,
        set: j => j === '' ? undefined : j
    },
    cCompanyName : {
        type : String,
        trim : true,
        required:false,
        set: k => k === '' ? undefined : k
    },
    cWebsite : {
        type : String,
        required:false,
        set: l => l === '' ? undefined : l
    },
    cDesiginition : {
        type : String,
        trim : true,
        required:false,
        set: m => m === '' ? undefined : m
    },
    cEmailAddress : {
        type: String,
        trim: true,
        lowercase: true,
        required:false,
        set: n => n === '' ? undefined : n
    },
    cLocation : {
        type : String,
        trim : true,
        required:false,
        set: o => o === '' ? undefined : o
    },
    cService : {
        type : String,
        trim : true,
        required:false,
        set: p => p === '' ? undefined : p
    },
    cPhone :{
       type:Number,
       required:false,
       set: xx => xx === '' ? undefined : xx
    } ,
    cMessage : {
        type : String,
        trim : true,
        required:false,
        set: q => q === '' ? undefined : q
    },

    // Joining Us Schema

    jName : {
        type : String,
        trim : true,
        required:false,
        set: r => r === '' ? undefined : r
    },
    jExperience :{
      type:Number,
      required:false,
      set: s => s === '' ? undefined : s
    } ,
    jWebsite : {
        type : String,
        required:false,
        set: t => t === '' ? undefined : t
    },
    jPhone : {
       type:Number,
       required:false,
       set: u => u === '' ? undefined : u
    } ,
    jEmailAddress : {
        type: String,
        trim: true,
        lowercase: true,
        required:false,
        set: v => v === '' ? undefined : v
    },
    jLocation : {
        type : String,
        trim : true,
        required:false,
        set: w => w === '' ? undefined : w
    },
    jCurrentState :{
      type:Number,
      required:false,
      set: x => x === '' ? undefined : x
    } ,
    jHighestQualification :{
       type:String,
       required:false,
      set: y => y === '' ? undefined : y
    } ,
    jPostAppliedFor :{
       type:String,
       required:false,
       set: z => z === '' ? undefined : z
    } ,
    jDomainWorkOn : {
        type : String,
        required:false,
      set: xa => xa === '' ? undefined : xa
    },
    jFileUpload :{
        type : String,
        required:false,
      set: xb => xb === '' ? undefined : xb
    } ,
    jMessage : {
        type : String,
        trim : true,
        type : String,
        required:false,
      set: xc => xc === '' ? undefined : xc

    },

    // Just Say Hii Schema

    hName : {
        type : String,
        trim : true,
        type : String,
        required:false,
      set: xd => xd === '' ? undefined : xd
    },
    hCompanyName : {
        type : String,
        trim : true,
        type : String,
        required:false,
      set: xe => xe === '' ? undefined : xe
    },
    hEmailAddress : {
        type: String,
        trim: true,
        lowercase: true,
        type : String,
        required:false,
      set: xf => xf === '' ? undefined : xf
    },
    hPhone : {
       type:Number,
       required:false,
       set: xy => xy === '' ? undefined : xy
    },
    hMessage : {
        type : String,
        trim : true,
        type : String,
        required:false,
      set: xg => xg === '' ? undefined : xg
    },
    
}, {
    timestamps: true
})

module.exports = mongoose.model('Contacts', contactSchema);