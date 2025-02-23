const mongoose=require("mongoose");


const studySchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
      },
      description: {
        type: String,
        required: true,
      },
      why_learn: {
        type: String,
        required: true,
      },
      difference: {
        type: String,
        required: true,
      },
      get_started: {
        type: String,
        required: true,
      },
   
});

module.exports.Studydata=mongoose.model("Studydata",studySchema);

