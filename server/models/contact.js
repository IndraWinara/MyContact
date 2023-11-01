import mongoose,{Schema} from "mongoose";



const contactDataSchema = new Schema ({
    name : String,
    birthday : String,
    relation : String,
    email : String,
    phone : String,
    image_url : String,
    job_id : [{ type: Schema.Types.ObjectId, ref: 'Jobs'}],
    address_id :  [{ type: Schema.Types.ObjectId, ref: 'Address'}],
},{timestamps : true})



const Contacts = mongoose.models.Contacts || mongoose.model('Contacts',contactDataSchema)

export default Contacts;