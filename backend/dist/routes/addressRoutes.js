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
const addressRouter = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
//will be a protected route , access from authorization header : token
addressRouter.use("/*", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const header = req.headers['authorization'] || '';
        const token = header.split(' ')[1];
        if (!token) {
            res.json({ status: 402, msg: 'Unauthorized Request' });
            return;
        }
        // Verify the token
        if (!process.env.JWT_SECRET) {
            return res.status(500).send('JWT_SECRET is not defined');
        }
        const decodedToken = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        if (!decodedToken) {
            return res.status(401).send('Invalid token');
        }
        //@ts-ignore
        req.user = decodedToken;
        next();
    }
    catch (error) {
        console.error(error);
    }
}));
addressRouter.post('/entry', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { House, Landmark, Dist, Area, State, Country, Type } = req.body;
    if (!House || !Landmark || !Dist || !Area || !State || !Country) {
        res.json({ status: 402, msg: 'Please fill all the fields' });
        return;
    } //TODO:can we remove this 
    const newAddress = yield prisma.address.create({
        data: {
            //@ts-ignore
            userId: req.user.id,
            House,
            Landmark,
            Dist,
            Area,
            State,
            Country,
        }
    });
    if (!newAddress) {
        res.json({ status: 402, msg: 'Address not created' });
        return;
    }
    res.json({ status: 200, msg: 'Address created successfully', data: newAddress });
}));
exports.default = addressRouter;
