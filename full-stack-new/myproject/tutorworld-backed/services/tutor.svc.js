var TutorModel = require('../models/TutorRegistartion.model');

class Tutorservice{
    create(data){
        var tutor = new TutorModel(data);
        return tutor.save();
    }
    getalltutor(){
        return TutorModel.find();
    }
    getbymobile(phone){
        // return TutorModel.findById({mobile})
        return TutorModel.findOne({phone});
    }
    
}

module.exports = new Tutorservice();