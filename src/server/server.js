"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path = require("path");
class Server {
    constructor() {
        this.port = process.env.PORT || '8000';
        this.app = (0, express_1.default)();
        this.midelwares();
    }
    static init() {
        return new Server();
    }
    publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express_1.default.static(publicPath));
    }
    midelwares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    srtart(callbck) {
        this.app.listen(this.port, callbck);
        this.publicFolder();
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map