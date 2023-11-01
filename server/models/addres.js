import mongoose,{Schema} from "mongoose";


const addresDataSchema = new Schema({
    country : String,
    street : String,
    zip_code : String,
})


const Address = mongoose.models.Address || mongoose.model('Address',addresDataSchema)

export default Address;