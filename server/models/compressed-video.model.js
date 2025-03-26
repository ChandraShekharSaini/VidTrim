import mongoose,{Schema} from "mongoose";

const compressedVideoSchema = new Schema({

    id: {type: String, required: true},
    videoUrl: {type: String, required: true},
    name: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
 
})

export default mongoose.model("CompressedVideo", compressedVideoSchema)
