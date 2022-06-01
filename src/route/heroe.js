"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const heroe_1 = require("../controller/heroe");
const router = (0, express_1.Router)();
router.get('/heroes', heroe_1.getHeros);
router.get('/heroes/:id', heroe_1.getHeroById);
router.post('/heroes', heroe_1.postHeroe);
router.put('/heroes/:id', heroe_1.putHeroe);
router.delete('/heroes/:id', heroe_1.deleteHeroe);
exports.default = router;
//# sourceMappingURL=heroe.js.map