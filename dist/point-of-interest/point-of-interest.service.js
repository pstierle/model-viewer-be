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
exports.PointOfInterestService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const model_entity_1 = require("../model/entities/model.entity");
const point_of_interest_entity_1 = require("./entities/point-of-interest.entity");
const typeorm_2 = require("typeorm");
let PointOfInterestService = class PointOfInterestService {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async create(createPointOfInterestDto) {
        const model = await this.dataSource.manager.findOne(model_entity_1.Model, {
            where: {
                id: createPointOfInterestDto.modelId,
            },
        });
        if (model) {
            const pointOfInterest = new point_of_interest_entity_1.PointOfInterest();
            pointOfInterest.description = createPointOfInterestDto.description;
            pointOfInterest.model = model;
            pointOfInterest.x = createPointOfInterestDto.x;
            pointOfInterest.y = createPointOfInterestDto.y;
            pointOfInterest.z = createPointOfInterestDto.z;
            const saved = await this.dataSource.manager.save(pointOfInterest);
            return saved;
        }
        else {
            return null;
        }
    }
    findByModelId(modelId) {
        return this.dataSource.manager.find(point_of_interest_entity_1.PointOfInterest, {
            where: {
                model: {
                    id: modelId,
                },
            },
        });
    }
};
PointOfInterestService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], PointOfInterestService);
exports.PointOfInterestService = PointOfInterestService;
//# sourceMappingURL=point-of-interest.service.js.map