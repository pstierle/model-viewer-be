"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
class Util {
    static modelUrl(modelId, userId) {
        return `http://localhost:3000/models/${userId}-${modelId}.glb`;
    }
}
exports.Util = Util;
//# sourceMappingURL=util.js.map