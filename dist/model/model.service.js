"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../auth/entities/user.entity");
const model_entity_1 = require("./entities/model.entity");
const typeorm_2 = require("typeorm");
let ModelService = class ModelService {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    findByUserId(userId) {
        return this.dataSource.manager.find(model_entity_1.Model, {
            where: {
                user: {
                    id: userId,
                },
            },
        });
    }
    findOne(id) {
        return this.dataSource.manager.findOne(model_entity_1.Model, {
            where: {
                id,
            },
        });
    }
    async createOne(createModelDto) {
        const user = await this.dataSource.manager.findOne(user_entity_1.User, {
            where: {
                id: createModelDto.userId,
            },
        });
        if (user) {
            const model = new model_entity_1.Model();
            model.name = createModelDto.modelName;
            model.user = user;
            return this.dataSource.manager.save(model);
        }
    }
};
ModelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], ModelService);
exports.ModelService = ModelService;
//# sourceMappingURL=model.service.js.map