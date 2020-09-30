import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { UserCreateInput } from "@prisma/client";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  all() {
    return this.prisma.user.findMany();
  }

  create(data: UserCreateInput) {
    return this.prisma.user.create({ data });
  }

  getById(id: number) {
    return this.prisma.user.findOne({ where: { id } });
  }

  getByEmail(email: string) {
    return this.prisma.user.findOne({ where: { email } });
  }
}