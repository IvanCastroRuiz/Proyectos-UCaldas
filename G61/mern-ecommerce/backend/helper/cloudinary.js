import { v2 as cloudinary } from "cloudinary";
import dotenv from 'dotenv';

dotenv.config();

//console.log(process.env.CLOUDINARY_NAME,process.env.CLOUDINARY_KEY,process.env.CLOUDINARY_SECRET);

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'productos G61'
    });
};

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id);
};