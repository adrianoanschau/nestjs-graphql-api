import { ConfigService } from "@nestjs/config";
import { User } from "../../users/models/user.model";
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(configService: ConfigService);
    validate(payload: Partial<User>): Promise<Partial<User>>;
}
export {};
