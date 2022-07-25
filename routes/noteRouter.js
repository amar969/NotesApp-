const express = require("express")
const notesController = require("../Controllers/notesController");

const router = express.Router()

router
.route('/')
.get(notesController.getAllNotes)
.post(notesController.createNotes)

router
.route("/:id")
.get(notesController.getNotes)
.patch(notesController.updateNotes)
.delete(notesController.deleteNotes)

module.exports = router