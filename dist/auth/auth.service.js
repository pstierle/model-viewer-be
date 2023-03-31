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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
let AuthService = class AuthService {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async register(createUserDto) {
        const found = await this.dataSource.manager.findOne(user_entity_1.User, {
            where: {
                name: createUserDto.name,
            },
        });
        if (!!found) {
            return null;
        }
        else {
            const user = new user_entity_1.User();
            user.name = createUserDto.name;
            user.models = [];
            const created = await this.dataSource.manager.save(user);
            console.log(created);
            return created;
        }
    }
    async login(name) {
        const found = await this.dataSource.manager.findOne(user_entity_1.User, {
            where: {
                name: name,
            },
        });
        if (!!found) {
            return found;
        }
        else {
            return null;
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map