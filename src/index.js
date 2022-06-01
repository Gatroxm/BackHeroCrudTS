"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./server/server"));
const heroe_1 = __importDefault(require("./route/heroe"));
const mysql_1 = __importDefault(require("./mysql/mysql"));
dotenv_1.default.config();
const server = server_1.default.init();
server.app.use(heroe_1.default);
mysql_1.default.instance;
server.srtart(() => {
    console.log('Servidor corriendo en el puerto: ', server.port);
});
//# sourceMappingURL=index.js.map