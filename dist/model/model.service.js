"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelService = void 0;
const common_1 = require("@nestjs/common");
let ModelService = class ModelService {
    constructor() {
        this.models = [
            {
                id: 19478623,
                name: 'Bench',
                url: 'http://localhost:3000/models/19478623.glb',
            },
            {
                id: 24356765,
                name: 'Garden House',
                url: 'http://localhost:3000/models/24356765.glb',
            },
        ];
    }
    findAll() {
        return this.models;
    }
    findOne(id) {
        return this.models.find((model) => model.id === id);
    }
};
ModelService = __decorate([
    (0, common_1.Injectable)()
], ModelService);
exports.ModelService = ModelService;
//# sourceMappingURL=model.service.js.map