const Notes = require("../models/notesModel")

exports.getAllNotes = async(req, res) => {
    try{
    const queryObj = {...req.query}
    const query = await Notes.find(queryObj)
    const notes = await query
    res.status(200).json({
        status: 'success',
        data: {
          notes
        }
      });
    } 
    catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
}

exports.getNotes = async(req, res) => {
    try {
      const notes = await Notes.findById(req.params.id)
      console.log(req.params.id)
      // Tour.findOne({ _id: req.params.id })
      res.status(200).json({
        status: "success", 
        data: {
          notes
        }
      })
    } catch (error) {
      res.status(400).json({
        status: "Fail", 
        message: error
      })
    }
  };



  exports.createNotes = async (req, res) => {
    try {
      // const newTour = new Tour({})
      // newTour.save()
  
      const newNotes = await Notes.create(req.body);
  
      res.status(201).json({
        status: 'success',
        data: {
          notes: newNotes
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      });
    }
  };

  exports.updateNotes = async (req, res) => {
    try {
      const notes = await Notes.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
  
      res.status(200).json({
        status: 'success',
        data: {
          notes
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };


  exports.deleteNotes = async(req, res) => {

    try {
      await Notes.findByIdAndDelete(req.params.id)

      res.status(204).json({
        status: "success",
        data: null
       
      })
    } catch (error) {
      res.status(400).json({
        status: "fail", 
        message: error 
    })
    }
  };
