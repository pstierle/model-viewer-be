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
exports.PointOfInterestController = void 0;
const common_1 = require("@nestjs/common");
const point_of_interest_service_1 = require("./point-of-interest.service");
const create_point_of_interest_dto_1 = require("./dto/create-point-of-interest.dto");
let PointOfInterestController = class PointOfInterestController {
    constructor(pointOfInterestService) {
        this.pointOfInterestService = pointOfInterestService;
    }
    async create(createPointOfInterestDto) {
        const saved = await this.pointOfInterestService.create(createPointOfInterestDto);
        return saved;
    }
    async findByModelId(modelId) {
        const found = await this.pointOfInterestService.findByModelId(modelId);
        return found;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_point_of_interest_dto_1.CreatePointOfInterestDto]),
    __metadata("design:returntype", Promise)
], PointOfInterestController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':modelId'),
    __param(0, (0, common_1.Param)('modelId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PointOfInterestController.prototype, "findByModelId", null);
PointOfInterestController = __decorate([
    (0, common_1.Controller)('point-of-interest'),
    __metadata("design:paramtypes", [point_of_interest_service_1.PointOfInterestService])
], PointOfInterestController);
exports.PointOfInterestController = PointOfInterestController;
//# sourceMappingURL=point-of-interest.controller.js.map