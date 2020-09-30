import { Module } from "@nestjs/common";
import { UsersResolver } from "./users.resolver";
import { PrismaModule } from "../prisma/prisma.module";
import { UsersService } from "./services/users.service";

@Module({
  imports: [PrismaModule],
  providers: [UsersResolver, UsersService],
  exports: [UsersService]
})
export class UsersModule {}
