"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = require("express");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userRouter = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// Signup logic
userRouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password, email } = req.body;
    if (!name || !password || !email) {
        return res.status(400).json({ msg: "All fields are required." });
    }
    try {
        const checkEmail = yield prisma.user.findFirst({ where: { email } });
        if (checkEmail) {
            return res.status(409).json({ msg: "User already exists." });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = yield prisma.user.create({
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
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "An error occurred. Please try again later." });
    }
    finally {
        yield prisma.$disconnect();
    }
}));
// Signin logic
userRouter.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ msg: "Email and password are required." });
    }
    try {
        // Check if user exists
        const user = yield prisma.user.findFirst({ where: { email } });
        if (!user) {
            return res.status(404).json({ msg: "User not found." });
        }
        // Compare password
        const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ msg: "Invalid credentials." });
        }
        // Generate JWT token
        if (!process.env.JWT_SECRET) {
            return res.status(500).json({ msg: "JWT secret is not defined." });
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
        return res.status(200).json({
            msg: "Signin successful.",
            token,
            user: { id: user.id, name: user.name, email: user.email },
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "An error occurred. Please try again later." });
    }
    finally {
        yield prisma.$disconnect();
    }
}));
exports.default = userRouter;
