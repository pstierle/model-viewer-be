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
exports.Model = void 0;
const user_entity_1 = require("../../auth/entities/user.entity");
const point_of_interest_entity_1 = require("../../point-of-interest/entities/point-of-interest.entity");
const util_1 = require("../../util/util");
const typeorm_1 = require("typeorm");
let Model = class Model {
    loadUrl() {
        this.url = util_1.Util.modelUrl(this.id, this.userId);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Model.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Model.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Model.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.models),
    __metadata("design:type", user_entity_1.User)
], Model.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => point_of_interest_entity_1.PointOfInterest, (poi) => poi.model),
    __metadata("design:type", Array)
], Model.prototype, "pointOfInterests", void 0);
__decorate([
    (0, typeorm_1.AfterLoad)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Model.prototype, "loadUrl", null);
Model = __decorate([
    (0, typeorm_1.Entity)()
], Model);
exports.Model = Model;
//# sourceMappingURL=model.entity.js.map