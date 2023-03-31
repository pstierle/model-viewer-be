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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointOfInterest = void 0;
const model_entity_1 = require("../../model/entities/model.entity");
const typeorm_1 = require("typeorm");
let PointOfInterest = class PointOfInterest {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], PointOfInterest.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PointOfInterest.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PointOfInterest.prototype, "x", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PointOfInterest.prototype, "y", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PointOfInterest.prototype, "z", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PointOfInterest.prototype, "modelId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PointOfInterest.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => model_entity_1.Model, (model) => model.pointOfInterests),
    __metadata("design:type", model_entity_1.Model)
], PointOfInterest.prototype, "model", void 0);
PointOfInterest = __decorate([
    (0, typeorm_1.Entity)()
], PointOfInterest);
exports.PointOfInterest = PointOfInterest;
//# sourceMappingURL=point-of-interest.entity.js.map