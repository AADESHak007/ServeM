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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = require("express");
const binRouter = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// Get all bins
binRouter.get('/allbins', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bins = yield prisma.ebins.findMany();
        res.json(bins);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'An error occurred. Please try again later.' });
    }
    finally {
        yield prisma.$disconnect();
    }
}));
//add a bin 
binRouter.post('/addbin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { binLat, binLong, binStatus } = req.body;
        if (!binLat || !binLong || !binStatus) {
            return res.status(400).json({ msg: 'All fields are required.' });
        }
        const newBin = yield prisma.ebins.create({
            data: {
                binLat,
                binLong,
                binStatus,
            }
        });
        res.json(newBin);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'An error occurred. Please try again later.' });
    }
    finally {
        yield prisma.$disconnect();
    }
}));
//update bin 
binRouter.put('/updatebin/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { binLat, binLong, binStatus } = req.body;
        const { id } = req.params;
        if (!id || (binLat === undefined && binLong === undefined && binStatus === undefined)) {
            return res.status(400).json({ msg: 'Please provide all the necessary fields.' });
        }
        const updatedBin = yield prisma.ebins.update({
            where: {
                id,
            },
            data: {
                binLat,
                binLong,
                binStatus,
            }
        });
        res.json(updatedBin);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'An error occurred. Please try again later.' });
    }
    finally {
        yield prisma.$disconnect();
    }
}));
exports.default = binRouter;
