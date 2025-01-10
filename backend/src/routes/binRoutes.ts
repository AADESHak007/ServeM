import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";

const binRouter = Router() ;

const prisma = new PrismaClient() ;

// Get all bins
binRouter.get('/allbins', async (req:Request, res:Response):Promise<any>=>{
    try {
        const bins = await prisma.ebins.findMany() ;
        res.json(bins) ;
    } catch (error) {
        console.error(error) ;
        res.status(500).json({msg:'An error occurred. Please try again later.'}) ;
    } finally {
        await prisma.$disconnect() ;
    }
})

//add a bin 

    binRouter.post('/addbin', async (req:Request, res:Response):Promise<any>=>{
    try {
        const { binLat, binLong, binStatus } = req.body ;

        if(!binLat || !binLong ||!binStatus){
            return res.status(400).json({msg:'All fields are required.'}) ;
        }

        const newBin = await prisma.ebins.create({
            data:{
                binLat,
                binLong,
                binStatus,
            }
        }) ;

        res.json(newBin) ;

    } catch (error) {
        console.error(error) ;
        res.status(500).json({msg:'An error occurred. Please try again later.'}) ;
    } finally {
        await prisma.$disconnect() ;
    }
})
//update bin 

    binRouter.put('/updatebin/:id', async (req:Request, res:Response):Promise<any>=>{
        try {
            const { binLat, binLong, binStatus } = req.body ;
            const { id } = req.params ;
            
            if(!id || (binLat === undefined && binLong === undefined && binStatus === undefined)){
                return res.status(400).json({msg:'Please provide all the necessary fields.'}) ;
            }
            
            const updatedBin = await prisma.ebins.update({
                where:{
                    id,
                },
                data:{
                    binLat,
                    binLong,
                    binStatus,
                }
            }) ;
            
            res.json(updatedBin) ;
            
        } catch (error) {
            console.error(error) ;
            res.status(500).json({msg:'An error occurred. Please try again later.'}) ;
        } finally {
            await prisma.$disconnect() ;
        }
    })

export default binRouter ;