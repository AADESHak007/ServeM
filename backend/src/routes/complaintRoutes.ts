import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response, Router } from "express";
import jwt from "jsonwebtoken"
import cloudinary from "cloudinary"
import fs from "fs"
import multer from "multer";

const complaintRouter = Router() 
const prisma = new PrismaClient() ;

complaintRouter.use("/*" ,async (req:Request ,res:Response, next:NextFunction) : Promise<any>=>{
    const header = req.header("Authorization")||"" ;
    const token = header.split(" ")[1] ;
    console.log("token")
    console.log(token) ;
    console.log("moved")
    if(!token){
        res.json({status:402,msg:'Invalid Token' ,token})
        return ;
    }else {
        console.log(token)
    }
    const secret = process.env.JWT_SECRET;
    console.log(secret) ;
    if (!secret) {
        return res.status(500).json({ message: 'JWT secret is not defined' });
    }
    const user = await jwt.verify(token ,secret)
    if(user){
        //@ts-ignore
        req.user = user ;
     next() ;

    }else{
        res.status(401)
        return res.json({message:'Invalid token'})
    }
        
})

const upload = multer({ dest: 'uploads/' });
cloudinary.v2.config({
    cloud_name: 'dbjsyhkrx',
    api_key:'547317118279164',
    api_secret: 'YTnA0c46XGCfEqM3yMCrANgO2OU',
  });

  complaintRouter.post("/filecomplaint", upload.single("file"), async (req:Request, res:Response):Promise<any> => {
    try {
        const { complaint } = req.body;
    
        if (!req.file || !complaint) {
          return res.status(400).json({ error: "Missing file or complaint message." });
        }
    
        // Upload the file to Cloudinary
        const cloudinaryResult = await cloudinary.v2.uploader.upload(req.file.path, {
          folder: "complaints", // Optional folder structure in Cloudinary
        });
    
        // Remove the temporary file
        fs.unlinkSync(req.file.path);
    
        // Save the complaint and Cloudinary URL in the database
        const complaintData = await prisma.complaints.create({
          data: {
            //@ts-ignore
            userId: req.user.id, 
            complaintImage: cloudinaryResult.secure_url, // Save Cloudinary URL
            complaint, // Save complaint message
          },
        });
    
        res.status(201).json({ status: "success", data: complaintData });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to process the complaint." });
      }
  });



export default complaintRouter ;