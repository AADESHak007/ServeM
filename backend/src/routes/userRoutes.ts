import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const userRouter = Router();
const prisma = new PrismaClient();


// Signup logic
userRouter.post("/signup", async (req: Request, res: Response): Promise<any> => {
    const { name, password, email } = req.body;

    if (!name || !password || !email) {
        return res.status(400).json({ msg: "All fields are required." });
    }

    try {
        const checkEmail = await prisma.user.findFirst({ where: { email } });
        if (checkEmail) {
            return res.status(409).json({ msg: "User already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                password: hashedPassword,
                email,
            },
        });

        return res.status(201).json({
            msg: "User created successfully.",
            data: { id: user.id, name: user.name, email: user.email },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "An error occurred. Please try again later." });
    } finally {
        await prisma.$disconnect();
    }
});



// Signin logic
userRouter.post("/signin", async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: "Email and password are required." });
    }

    try {
        // Check if user exists
        const user = await prisma.user.findFirst({ where: { email } });
        if (!user) {
            return res.status(404).json({ msg: "User not found." });
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ msg: "Invalid credentials." });
        }

        // Generate JWT token

        if (!process.env.JWT_SECRET) {
            return res.status(500).json({ msg: "JWT secret is not defined." });
        }
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET ,{
            expiresIn: "1h",
        });

        return res.status(200).json({
            msg: "Signin successful.",
            token,
            user: { id: user.id, name: user.name, email: user.email },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "An error occurred. Please try again later." });
    } finally {
        await prisma.$disconnect();
    }
});

export default userRouter;
