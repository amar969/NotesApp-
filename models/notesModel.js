const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    title: {
        type : String,
        required: [true, "Notes must have title"]
    }, 
    notes: {
        type: String, 
    }
})


const Notes = mongoose.model("Notes", notesSchema)
module.exports = Notes