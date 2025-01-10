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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cloudinary_1 = __importDefault(require("cloudinary"));
const fs_1 = __importDefault(require("fs"));
const multer_1 = __importDefault(require("multer"));
const complaintRouter = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
complaintRouter.use("/*", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const header = req.header("Authorization") || "";
    const token = header.split(" ")[1];
    console.log("token");
    console.log(token);
    console.log("moved");
    if (!token) {
        res.json({ status: 402, msg: 'Invalid Token', token });
        return;
    }
    else {
        console.log(token);
    }
    const secret = process.env.JWT_SECRET;
    console.log(secret);
    if (!secret) {
        return res.status(500).json({ message: 'JWT secret is not defined' });
    }
    const user = yield jsonwebtoken_1.default.verify(token, secret);
    if (user) {
        //@ts-ignore
        req.user = user;
        next();
    }
    else {
        res.status(401);
        return res.json({ message: 'Invalid token' });
    }
}));
const upload = (0, multer_1.default)({ dest: 'uploads/' });
cloudinary_1.default.v2.config({
    cloud_name: 'dbjsyhkrx',
    api_key: '547317118279164',
    api_secret: 'YTnA0c46XGCfEqM3yMCrANgO2OU',
});
complaintRouter.post("/filecomplaint", upload.single("file"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { complaint } = req.body;
        if (!req.file || !complaint) {
            return res.status(400).json({ error: "Missing file or complaint message." });
        }
        // Upload the file to Cloudinary
        const cloudinaryResult = yield cloudinary_1.default.v2.uploader.upload(req.file.path, {
            folder: "complaints", // Optional folder structure in Cloudinary
        });
        // Remove the temporary file
        fs_1.default.unlinkSync(req.file.path);
        // Save the complaint and Cloudinary URL in the database
        const complaintData = yield prisma.complaints.create({
            data: {
                //@ts-ignore
                userId: req.user.id,
                complaintImage: cloudinaryResult.secure_url, // Save Cloudinary URL
                complaint, // Save complaint message
            },
        });
        res.status(201).json({ status: "success", data: complaintData });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to process the complaint." });
    }
}));
exports.default = complaintRouter;
