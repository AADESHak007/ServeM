"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const addressRoutes_1 = __importDefault(require("./routes/addressRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config({
    path: "./.env"
});
const app = (0, express_1.default)();
app.use('/*', (0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/api/v1/user", userRoutes_1.default);
app.use("/api/v1/address", addressRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Hello from the MAPserver');
});
app.listen(3000, () => {
    console.log('Server is running on   ' + 'http://localhost:3000');
});
