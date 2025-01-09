import { PrismaClient } from "@prisma/client";
import { Router,Response,Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

const addressRouter = Router() ;
const prisma = new PrismaClient() ;


//will be a protected route , access from authorization header : token
addressRouter.use("/*" ,async (req:Request ,res:Response, next:NextFunction) : Promise<any>=>{
    try {
        const header = req.headers['authorization'] || '' ;
        const token = header.split(' ')[1] ;
        if(!token){
            res.json({status:402 ,msg:'Unauthorized Request'})
            return ;
        }
    
        // Verify the token
        if (!process.env.JWT_SECRET) {
            return res.status(500).send('JWT_SECRET is not defined');
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!decodedToken) {
            return res.status(401).send('Invalid token');
        }
        //@ts-ignore
        req.user = decodedToken;
    
        next();
    } catch (error) {
        console.error(error) ;
    }
})
addressRouter.post('/entry' , async(req:Request, res:Response):Promise<any> => {
    const {House ,Landmark,Dist,Area ,State ,Country,Type} = req.body ;
    if(!House || !Landmark || !Dist || !Area || !State || !Country){
        res.json({status:402 ,msg:'Please fill all the fields'})
        return ;
    } //TODO:can we remove this 

    const newAddress = await prisma.address.create({
        data:{
            //@ts-ignore
            userId:req.user.id,
            House,
            Landmark,
            Dist,
            Area,
            State,
            Country,
        }
    })
    if(!newAddress){
        res.json({status:402 ,msg:'Address not created'})
        return ;
    }
    res.json({status:200 ,msg:'Address created successfully', data:newAddress})

})



export default addressRouter;