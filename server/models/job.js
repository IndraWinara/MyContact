import mongoose,{Schema} from "mongoose";


const jobDataSchema = new Schema({
    job_name : String,
    position : String,
    location : String,
})


const Jobs = mongoose.models.Jobs || mongoose.model('Jobs',jobDataSchema)

export default Jobs;