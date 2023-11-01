import mongoose,{Schema} from "mongoose";



const userDataSchema = new Schema({
    name : String,
    password : String,
    email : {type : String, unique : true},
    phone : {type : String, unique : true},
    address : String,
    image_url : String,
    contact_id :  [{ type: Schema.Types.ObjectId, ref: 'Contacts'}],
},{timestamps : true})

const Users = mongoose.models.Users || mongoose.model('Users',userDataSchema)

export default Users;