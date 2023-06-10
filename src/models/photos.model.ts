import mongoose, { Schema, model } from "mongoose";

const enumData = {
    JPEG:1,
    JPG:2,
    PNG:3
}

// MongoDB creating schema
const photoSchema = new Schema({
    name:{
        type:String,
        maxlength:20
    },
    description:{
        type:String
    },
    mime_type:{
        type:Number,
        enum:enumData
    },
    media_metadata:{
        'width':{
            type:Number
        },
        'height':{
            type:Number
        },
        'photo':{
            type:String
        }
    }
},
{
    timestamps:true
})

// Database model
export const photoModel = model('Photo',photoSchema)
